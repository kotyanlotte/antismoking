import axios from "axios";

type GuestLogoutReturnType = {
    guestLogout: () => void;
};

export const useGuestLogout = (): GuestLogoutReturnType => {
    const guestLogout = async () => {
        await axios.post("/logout");
    };

    return {
        guestLogout,
    };
};
