import './CustomLink.scss';
import {Link} from "react-router";
import {FC} from "react";

interface CustomLinkProps {
    to: string,
    title: string,
    onClick?: () => void
}

export const CustomLink: FC<CustomLinkProps> = ({ to, title, onClick }) => {
    return (
        <div className="custom__link">
            <Link to={to}  onClick={onClick}>{title}</Link>
        </div>
    )
}