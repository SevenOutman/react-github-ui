import React from 'react';
import 'primer-branch-name/index.scss';

const asSpan = ({ children }) => (
    <span className="branch-name">{children}</span>
);

const asAnchor = ({ href, children}) => (
    <a href={href} className="branch-name">{children}</a>
);

const BranchName = props => props.href ? asAnchor(props) : asSpan(props);

export default BranchName;
