import { useState } from "react";

export const ForceUpdater = () => {
    const [updater, setUpdater] = useState(0)
    return () => setUpdater(updater + 1)
}

export const ForceUpdaterOnce = () => {
    const [updater, setUpdater] = useState(false)
    return setUpdater
}