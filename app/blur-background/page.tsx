'use client';

import {useRef, useState} from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ImageRevealSlider from "@/components/ImageComparison";

const MySwal = withReactContent(Swal);

export default function ImageUploader() {
    const [preview, setPreview] = useState<string | null>(null);
    const [originalImage, setOriginalImage] = useState<string | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const development = `${process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BACKEND_API_LOCAL : process.env.NEXT_PUBLIC_BACKEND_API}blur-bg`;

    const handleDemoClick = async (url: string) => {
        try {
            // Reset previous images if they exist
            if (originalImage || preview) {
                setPreview(null);
                setOriginalImage(null);
            }

            // Show loading UI (optional, if you want to show a fake progress bar or loader)
            setUploadProgress(0);

            // Fetch the image as a blob from the demo URL
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Failed to load demo image');
            }

            const blob = await res.blob();

            // Create a virtual file from the blob
            const file = new File([blob], 'demo.jpg', { type: blob.type });

            // Create a FormData payload
            const formData = new FormData();
            formData.append('file', file);

            // Use XMLHttpRequest to send it (so progress bar stays consistent with manual uploads)
            const xhr = new XMLHttpRequest();
            xhr.open('POST', development);


            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(percent);
                }
            };

            xhr.onload = () => {
                try {
                    if (xhr.status === 200) {
                        const processedBlob = xhr.response;
                        const processedUrl = URL.createObjectURL(processedBlob);

                        setPreview(processedUrl);
                        setOriginalImage(url);
                    } else {
                        console.error('Processing failed:', xhr.statusText);
                        MySwal.fire({
                            icon: 'error',
                            title: 'Processing Error',
                            text: 'Demo image could not be processed.',
                            confirmButtonColor: '#10B981',
                        });
                    }
                } catch (error) {
                    console.error('Error handling demo response:', error);
                    MySwal.fire({
                        icon: 'error',
                        title: 'Unexpected Error',
                        text: 'Something went wrong while processing the demo image.',
                        confirmButtonColor: '#10B981',
                    });
                } finally {
                    setUploadProgress(null);
                }
            };

            xhr.onerror = () => {
                console.error('Network error during demo upload');
                MySwal.fire({
                    icon: 'error',
                    title: 'Network Error',
                    text: 'Failed to upload demo image. Please check your connection.',
                    confirmButtonColor: '#10B981',
                });
                setUploadProgress(null);
            };

            xhr.responseType = 'blob';
            xhr.send(formData);
        } catch (err) {
            console.error('Error during demo image handling:', err);
            MySwal.fire({
                icon: 'error',
                title: 'Unexpected Error',
                text: 'An error occurred while trying to use the demo image.',
                confirmButtonColor: '#10B981',
            });
            setUploadProgress(null);
        }
    };



    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            // Restart images on a new upload
            if (originalImage || preview) {
                setPreview(null);
                setOriginalImage(null);
            }

            // Take the original image from input
            const file = e.target.files?.[0];
            if (!file) return;

            // ✅ Check file extension
            const allowedExtensions = ['png', 'jpg', 'jpeg', 'webp'];
            const fileName = file.name.toLowerCase();
            const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1);

            if (!allowedExtensions.includes(fileExt)) {
                await MySwal.fire({
                    icon: 'error',
                    title: 'Unsupported File Type',
                    text: `The uploaded file extension ".${fileExt}" is not supported. Please upload a PNG, JPG, JPEG, or WEBP image.`,
                    confirmButtonColor: '#10B981',
                });
                return;
            }

            // Save original image's link
            const originalUrl = URL.createObjectURL(file);
            setOriginalImage(originalUrl);
            setUploadProgress(0);

            const formData = new FormData();
            formData.append('file', file);

            const xhr = new XMLHttpRequest();
            xhr.open('POST', `${process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BACKEND_API_LOCAL : process.env.NEXT_PUBLIC_BACKEND_API}blur-bg`);

            xhr.upload.onprogress = (event) => {
                if (event.lengthComputable) {
                    const percent = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(percent);
                }
            };

            xhr.onload = () => {
                try {
                    if (xhr.status === 200) {
                        const blob = xhr.response;
                        const processedUrl = URL.createObjectURL(blob);
                        setPreview(processedUrl);
                    } else {
                        console.error('Upload failed:', xhr.statusText);
                        MySwal.fire({
                            icon: 'error',
                            title: 'Processing Error',
                            text: 'Demo image could not be processed.',
                            confirmButtonColor: '#10B981',
                        });
                    }
                } catch (loadError) {
                    console.error('Error processing response:', loadError);
                    MySwal.fire({
                        icon: 'error',
                        title: 'Unexpected Error',
                        text: 'Something went wrong while processing the demo image.',
                        confirmButtonColor: '#10B981',
                    });
                } finally {
                    setUploadProgress(null);
                }
            };

            xhr.onerror = () => {
                console.error('Network error during upload');
                MySwal.fire({
                    icon: 'error',
                    title: 'Network Error',
                    text: 'Failed to upload the image. Please check your connection and try again.',
                    confirmButtonColor: '#10B981', // Emerald
                });
                setUploadProgress(null);
            };


            xhr.responseType = 'blob';
            xhr.send(formData);
        } catch (err) {
            console.error('Unexpected error during upload:', err);
            MySwal.fire({
                icon: 'error',
                title: 'Unexpected Error',
                text: 'An error occurred while trying to use the demo image.',
                confirmButtonColor: '#10B981',
            });
            setUploadProgress(null);
        }
    };


    console.log("NODE_ENV:", process.env.NODE_ENV); // likely undefined in browser


    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    const openUrlInput = async () => {
        const { value: imageUrl } = await MySwal.fire({
            title: 'Paste Image URL',
            input: 'url',
            inputLabel: 'Image Link',
            inputPlaceholder: 'https://example.com/image.jpg',
            showCancelButton: true,
            confirmButtonColor: '#10B981', // emerald-500
            cancelButtonColor: '#d33',
            confirmButtonText: 'Upload',
            backdrop: true,
            customClass: {
                popup: 'rounded-xl shadow-lg',
                input: 'text-sm',
            },
            inputValidator: (value) => {
                if (!value || !value.startsWith('http')) {
                    return 'Please enter a valid image URL';
                }
                return null;
            },
        });

        if (imageUrl) {
            handleDemoClick(imageUrl)
        }
    };

    return (
        <div
            className="pt-32 flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <h1 className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-2xl md:text-3xl font-bold leading-tight max-w-[440px]">
                Upload an image to <br className="sm:hidden"/> <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">blur</span> the
                background
            </h1>

            <button
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg px-8 py-4 text-lg rounded-full transition"
                onClick={() => inputRef.current?.click()}
            >
                Upload Image
            </button>

            <p className="text-gray-600">
                <span className="font-semibold">or drop a file,</span>
                <br />
                paste image or{' '}
                <button onClick={openUrlInput} className="text-blue-600 underline">
                    URL
                </button>
            </p>

            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
            />

            {uploadProgress !== null && (
                <div className="w-full max-w-md mt-6">
                    <div className="h-2 bg-gray-200 rounded">
                        <div
                            className="h-2 bg-emerald-500 rounded transition-all duration-200"
                            style={{ width: `${uploadProgress}%` }}
                        />
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{uploadProgress}%</p>
                </div>
            )}

            {preview && originalImage && (
                <div className="mt-6">
                    <ImageRevealSlider img1={originalImage} img2={preview} />
                </div>
            )}

            <div className="mt-8">
                <p className="mb-2 text-sm text-gray-700 font-medium">No image? Try one of these:</p>
                <div className="flex gap-2 justify-center">
                    {['demo1.jpg', 'demo2.jpg', 'demo3.jpg', 'demo4.jpg'].map((src, i) => (
                        <img
                            key={i}
                            src={`/demos/${src}`}
                            alt={`demo-${i}`}
                            className="w-16 h-16 object-cover rounded cursor-pointer hover:scale-105 transition"
                            onClick={() => handleDemoClick(`/demos/${src}`)}
                        />
                    ))}
                </div>
            </div>

            <p className="text-xs text-gray-500 my-6 max-w-md">
                By uploading an image or URL you agree to our{' '}
                <a href="#" className="underline">
                    Terms of Service
                </a>
                . To learn more about how we handle your data, check our{' '}
                <a href="#" className="underline">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
}
