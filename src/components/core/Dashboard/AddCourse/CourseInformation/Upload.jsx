import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { useSelector } from "react-redux";
import "video-react/dist/video-react.css";
import { Player } from "video-react";

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const { course } = useSelector((state) => state.course);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData || editData || ""
  );

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    accept: !video
      ? { "image/*": [".jpeg", ".jpg", ".png"] }
      : { "video/*": [".mp4"] },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
        };
        setSelectedFile(file);
      }
    },
    noClick: false, // enable click on dropzone
  });

  useEffect(() => {
    register(name, { required: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register]);

  useEffect(() => {
    setValue(name, selectedFile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile, setValue]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} {!viewData && <sup className="text-pink-200">*</sup>}
      </label>

      <div
        {...getRootProps()}
        className={`${
          isDragActive ? "bg-richblack-600" : "bg-richblack-700"
        } flex min-h-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-dotted border-richblack-500 relative`}
      >
        <input {...getInputProps()} />

        {previewSource ? (
          !video ? (
            <img
              src={previewSource}
              alt="Preview"
              className="h-full w-full rounded-md object-cover"
            />
          ) : (
            <Player aspectRatio="16:9" playsInline src={previewSource} />
          )
        ) : (
          <div className="flex w-full flex-col items-center p-6">
            <div className="grid aspect-square w-14 place-items-center rounded-full bg-pure-greys-800">
              <FiUploadCloud className="text-2xl text-yellow-50" />
            </div>
            <p className="mt-2 max-w-[200px] text-center text-sm text-richblack-200">
              Drag and drop an {!video ? "image" : "video"}, or click to{" "}
              <span className="font-semibold text-yellow-50">Browse</span> a
              file
            </p>
            <ul className="mt-10 flex list-disc justify-between space-x-12 text-center text-xs text-richblack-200">
              <li>Aspect ratio 16:9</li>
              <li>Recommended size 1024x576</li>
            </ul>
          </div>
        )}

        {/* Cancel button */}
        {previewSource && !viewData && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // prevent reopening file picker
              setPreviewSource("");
              setSelectedFile(null);
              setValue(name, null);
            }}
            className="absolute bottom-2 right-2 text-sm text-richblack-400 underline bg-richblack-800 px-2 py-1 rounded"
          >
            Cancel
          </button>
        )}
      </div>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
}
