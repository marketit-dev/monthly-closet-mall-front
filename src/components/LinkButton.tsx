import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/main.scss';

type LinkButtonProps = {
    path: string;
    text: string;
};

const LinkButton = ({ path, text }: LinkButtonProps) => {
    const history = useHistory();
    function goHistory(inputPath: string) {
        history.push(inputPath);
    }
    return (
        <button
            className="link-button font-h5"
            onClick={() => goHistory(path)}
            onKeyDown={() => goHistory(path)}
            type="button"
        >
            {text}
        </button>
    );
};

export default LinkButton;
