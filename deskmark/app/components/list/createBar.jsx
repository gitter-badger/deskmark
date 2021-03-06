import React, {PropTypes} from 'react';

const propTypes = {
  onOpenEmptyEditor: PropTypes.func.isRequired
};

function CreateBar({onOpenEmptyEditor}){
  return (
    <a href="#" onClick={onOpenEmptyEditor} className="list-group-item create-entry">
      + 创建新的文章
    </a>
  );
}

CreateBar.propTypes = propTypes;

export default CreateBar;
