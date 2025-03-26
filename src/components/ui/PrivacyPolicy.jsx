import { HiArrowUturnLeft, HiOutlineShieldExclamation } from "react-icons/hi2";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="w-full">
            <h1 className="text-3xl text-center mb-12">Settings</h1>

            <div className="max-w-xl mx-auto p-5 bg-dark-2 rounded-md">
                <div className="flex items-center justify-between mb-8">
                    <Link to={-1} className="flex items-center gap-2.5 text-primary-blue">
                        <HiArrowUturnLeft />
                        Back
                    </Link>
                    <p className="flex items-center gap-2.5">
                        <HiOutlineShieldExclamation />
                        Privacy Policy
                    </p>
                </div>

                <p className="mt-8">Privacy Policy is currently under maintenance.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;