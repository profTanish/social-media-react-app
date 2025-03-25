import { HiOutlineChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SettingItem = ({
    icon: Icon,
    label,
    link,
    onClick,
    textClass = "",
    iconBgClass = "bg-primary-blue",
}) => {
    return (
        <div>
            <li className="bg-dark-2 transition-all duration-300 hover:bg-dark-3 px-5 py-3.5 rounded-md">
                {onClick ? (
                    <button
                        className={`flex items-center justify-between gap-4 w-full ${textClass}`}
                        onClick={onClick}
                    >
                        <span className="flex items-center gap-4">
                            <span className={`p-2.5 ${iconBgClass} rounded-full`}>
                                <Icon />
                            </span>
                            <span className="text-base">{label}</span>
                        </span>
                        <HiOutlineChevronRight />
                    </button>
                ) : (
                    <Link
                        to={link}
                        className={`flex items-center justify-between gap-4 w-full ${textClass}`}
                    >
                        <span className="flex items-center gap-4">
                            <span className={`p-2.5 ${iconBgClass} rounded-full`}>
                                <Icon />
                            </span>
                            <span className="text-base">{label}</span>
                        </span>
                        <HiOutlineChevronRight />
                    </Link>
                )}
            </li>
        </div>
    );
};

export default SettingItem;