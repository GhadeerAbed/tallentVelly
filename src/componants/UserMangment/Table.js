import React, { useState } from "react";
import { TableContainer, ListContainer1 } from "../../styled/Container2";
import { BsThreeDotsVertical } from "react-icons/bs";
const checkListTag = ["Set as User", "Block", "Delete"];
const Table = ({ data, search }) => {
  const [openTag, setOpenTag] = useState(false);

  // const handleClick = () => {
  //   setOpenTag(!openTag);

  // };
  return (
    <TableContainer>
      <table>
        <tbody>
          <tr className="firstRow">
            <th className="namecol">Name</th>
            <th style={{ width: "320px" }}>Email</th>
            <th>Balance</th>
            <th style={{ width: "150px" }}></th>
            <th>Status</th>
            <th></th>
          </tr>
          {data.users
            ?.filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.firstName.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <tr className="secondCol" key={item._id}>
      
                <td className="firstCol">
                  <div>{item.firstName[0].toUpperCase()}</div>
                  {item.firstName} {item.lastName}
                </td>
                <td>{item.email}</td>
                <td>${item.balance}</td>
                <td>{item.role === 1 ? "team" : null}</td>
                <td>
                  {item.verifiedAddress.status === "approved" &&
                  item.verifiedId.status === "approved" ? (
                    <p className="ver">Verified</p>
                  ) : (
                    <p className="n-ver">Not Verified</p>
                  )}
                </td>
                <td> 
                  <button>
                    <BsThreeDotsVertical
                      onClick={() => {
                        setOpenTag(!openTag);
                      }}
                    />
                  </button>
                  {openTag ? (
                    <ListContainer1>
                      {checkListTag.map((items, index) => (
                        <div  className="lilist">
                          <span>{items}</span>
                        </div>
                      ))}
                    </ListContainer1>
                  ) : null}
             
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
