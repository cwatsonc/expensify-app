import React from "react";

const EditExpensePage = (props) => (
    <div>
        This is edit expense page with id of {props.match.params.id}
    </div>
);

export default EditExpensePage;