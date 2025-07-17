'use client';

import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import dotenv from 'dotenv';

const MySwal = withReactContent(Swal);

export default function ImageUploader() {
    const [preview, setPreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        // const file = e.target.files?.[0];
        // if (file) setPreview(URL.createObjectURL(file));
        const res = fetch(process.env.NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BACKEND_API_LOCAL! + "remove-bg" : process.env.NEXT_PUBLIC_BACKEND_API! + "remove-bg", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ file: e.target.files?.[0]})
        })

        // const data = await res.json()

        console.log(res)

        return res
    };

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
            setPreview(imageUrl);
        }
    };

    return (
        <div
            className="pt-32 flex flex-col items-center justify-center min-h-screen px-4 text-center gap-6"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <h1 className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent text-2xl md:text-3xl font-bold leading-tight max-w-[440px]">
                Upload an image to <br className="sm:hidden" /> <span className="bg-gradient-to-r from-teal-400 to-emerald-600 bg-clip-text text-transparent">remove</span> the background
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

            {preview && (
                <div className="mt-6">
                    <img
                        src={preview}
                        alt="Uploaded"
                        className="max-h-[600px] rounded shadow object-contain"
                    />
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
                            onClick={() => setPreview(`/demos/${src}`)}
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
