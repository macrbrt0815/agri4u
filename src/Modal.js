const Modal = () => {
  return (
    <div class="modal fade" tabindex="-1" role="dialog" id="appleModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="container-fluid">
              <img src="icons/pasta-1.png" class="mb-3" height="30" /> <br />
              <b>Are you sure you want to add this to your cart?</b>
            </div>

            <hr />
            <div class="row m-2">
              <div class="col-md-4">
                <img
                  class="card-img-top m-1"
                  src="${chickenAlfredo.imageSource}"
                />
              </div>
              <div class="col-md-8">
                <b>name</b> <br />{" "}
                <small>
                  Size:&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="chickenAlfredoSize"></span>
                  <br /> Quantity:&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="chickenAlfredoQuantity"></span> <br />{" "}
                  <b class="float-right">
                    Php&nbsp;&nbsp;<span class="chickenAlfredoPrice"></span>
                  </b>
                </small>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              id="modalChickenAlfredo"
              type="button"
              class="btn btn-warning"
            >
              Add to Cart
            </button>
            <button type="button" class="btn btn-dark" data-dismiss="modal">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
