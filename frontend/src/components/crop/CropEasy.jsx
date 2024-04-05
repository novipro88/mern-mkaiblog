import React, { useState } from "react";
import Cropper from "react-easy-crop";

import getCroppedImg from "./cropImage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfilePicture } from "../../services/index/users";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/reducers/userReducers";
import { toast } from "react-hot-toast";

const CropEasy = ({ photo, setOpenCrop }) => {
  const userState = useSelector((state) => state.user);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setzoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: ({ token, formData }) => {
      return updateProfilePicture({
        token: token,
        formData: formData,
      });
    },
    onSuccess: (data) => {
      dispatch(userActions.setUserInfo(data));
      setOpenCrop(false);
      localStorage.setItem("account", JSON.stringify(data));
      queryClient.invalidateQueries(["profile"]);
      toast.success("Profile Photo is updated");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const handleCropComplete = (cropedArea, cropedAreaPixels) => {
    setCroppedAreaPixels(cropedAreaPixels);
  };

  const handleCropImage = async () => {
    try {
      const croppedImg = await getCroppedImg(photo?.url, croppedAreaPixels);

      const file = new File([croppedImg.file], `${photo?.file?.name}`, {
        type: photo?.file?.type,
      });

      const formData = new FormData();
      formData.append("profilePicture", file);

      mutate({ token: userState.userInfo.token, formData: formData });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex justify-center overflow-auto bg-black/50 p-5">
      <div className="h-fit w-full rounded-lg bg-white p-5 sm:max-w-[350px]">
        <h2 className="mb-2 font-semibold text-dark-hard">Crop Image</h2>
        <div className="relative aspect-square w-full overflow-hidden rounded-lg">
          <Cropper
            image={photo?.url}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onZoomChange={setzoom}
            onCropChange={setCrop}
            onCropComplete={handleCropComplete}
          />
        </div>
        <div>
          <label
            htmlFor="zoomRage"
            className="mb-0.5 mt-2 block text-sm font-medium text-gray-900"
          >
            Zoom: {`${Math.round(zoom * 100)}%`}
          </label>
          <input
            type="range"
            id="zoomRange"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setzoom(e.target.value)}
            className="range-sm mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          <button
            disabled={isLoading}
            onClick={() => setOpenCrop(false)}
            className="rounded-lg border border-red-500 px-5 py-2.5 text-sm text-red-500 disabled:opacity-70"
          >
            Cancel
          </button>
          <button
            disabled={isLoading}
            onClick={handleCropImage}
            className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm text-white disabled:opacity-70"
          >
            Crop & Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropEasy;
