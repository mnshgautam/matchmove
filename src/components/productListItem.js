import React, { PureComponent } from "react";

class ProductListItem extends PureComponent {

  listOfItems(list) {
    return this.props.list.map((obj) => {
      return (
        <tr className="" key={obj.title}>
          <td className="">{obj.title}</td>
          <td className="">{obj.category}</td>
          <td className="">{obj.brand}</td>
          <td className="">{obj.color}</td>
        </tr>
      )
    });
  }

  render() {
    return <React.Fragment>{this.listOfItems(this.list)} </React.Fragment>;
  }
}

export default ProductListItem;
