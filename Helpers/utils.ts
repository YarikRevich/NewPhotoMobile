import { useState } from "react";
export const ForceUpdater = () => {
    const [updater, setUpdater] = useState(0)
    return () => setUpdater(updater + 1)
}

export const ForceUpdaterOnce = () => {
    const [_, setUpdater] = useState(false)
    return () => setUpdater(true)
}

/**
 * 
 * @param height height of the image
 * @param width width of the image
 * @returns the size in megabytes
 */
export const getImageSize = (height: number, width: number): number => {

    const a1 = height * width;
    const a2 = a1 * 16;
    const a3 = a2 / 8;
    return a3 / 1024 / 1024;
}

export const getRandomFileName = (): string => {
    let a = [];
    for (let i = 32; i <= 126; i++) {
        a.push(String.fromCharCode(i));
    }
    let r = "";
    for (let i = 0; i <= 10; i++) {
        r += a[Math.floor(Math.random() * (95))]
    }
    return r
}