import React from "react";

const Modal = ({ hideModal, textArea, rep }) => {
  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Wybrane parametry:</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hideModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Skopiuj poniższy kod i wklej go do excela o nazwie:{" "}
              {rep.excel_name}
            </p>
            <form>
              <div class="form-group">
                <textarea
                  className="form-control"
                  value={textArea}
                  readOnly
                ></textarea>{" "}
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={hideModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
