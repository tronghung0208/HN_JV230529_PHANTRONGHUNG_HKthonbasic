import React from "react";

function CartTable() {
  return (
    <div className="box-all">
      <div className="table_list">
        <div className="table_list-container">
          <div>
            <h2>List of selected products</h2>
            <div className="search-and-sort">
              <div className="form-search">
                <input
                  type="text"
                  placeholder="Nhập tên cần tìm kiếm"
                  className="search-value"
                />
                <button className="search">Search</button>
              </div>
            </div>
          </div>
          <table className="styled-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="style-table">
                <td>1</td>
                <td>Quần jean Gucii</td>
                <td>
                  <img
                    src="https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/July2022/xam_dam_fix_1.jpg"
                    alt=""
                  />
                </td>
                <td>Số lượng</td>
                <td>Giá</td>
                <td>Tổng tiền</td>
                <td>
                  <button className="btn-edit">Update</button>
                  <button className="btn-denger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Total: 350$</h3>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
