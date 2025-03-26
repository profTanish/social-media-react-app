import { HiArrowUturnLeft, HiOutlineBell } from "react-icons/hi2";
import { Link } from "react-router-dom";

const NotificationsSettings = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl text-center mb-12">Settings</h1>

            <div className="max-w-xl mx-auto p-5 bg-dark-2 rounded-md">
                <div className="flex items-center justify-between">
                    <Link to={-1} className="flex items-center gap-2.5 text-primary-blue">
                        <HiArrowUturnLeft />
                        Back
                    </Link>
                    <p className="flex items-center gap-2.5">
                        <HiOutlineBell />
                        Notifications
                    </p>
                </div>

                <p className="mt-8">Notifications are currently under maintenance.</p>
            </div>
        </div>
    );
};

export default NotificationsSettings;