import React from "react";
import ReactModal from "react-modal";

export class CreateNew extends React.Component {
  state = {
    modalOpen: false,
    title: "",
    content: "",
  };
  toggleModalOpen = () => {
    const { modalOpen: prevStateVal } = this.state;
    this.setState({ modalOpen: !prevStateVal });
  };

  onTitleChange = (e) => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onContentChange = (e) => {
    e.preventDefault();
    this.setState({ content: e.target.value });
  };
  onSubmitModalForm = () => {
    const { handleCreateNew } = this.props;
    const { title, content } = this.state;
    content ? handleCreateNew(title, content) : handleCreateNew(title);
    this.toggleModalOpen();
  };
  render() {
    const {
      withTitle = false,
      withContent = false,
      itemType = "",
    } = this.props;
    const { modalOpen } = this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-link"
          onClick={this.toggleModalOpen}
        >
          New {itemType}
        </button>
        <ReactModal
          className="card w-auto h-auto mt-5 mx-auto col-6 bg-secondary "
          isOpen={modalOpen}
          onRequestClose={this.toggleModalOpen}
          shouldCloseOnOverlayClick={false}
        >
          <div className="card-body">
            <form onSubmit={this.onSubmitModalForm}>
              <input
                className="form-control form-control-sm form-group text-center"
                placeholder="title"
                onChange={this.onTitleChange}
                hidden={!withTitle}
              />
              <input
                className="form-control form-control-sm form-group text-center"
                placeholder="content"
                onChange={this.onContentChange}
                hidden={!withContent}
              />

              <button
                className="form-control form-control-sm form-group  mx-auto col-2 "
                type="submit"
              >
                Add
              </button>
            </form>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default CreateNew;
