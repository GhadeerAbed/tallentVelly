import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

export const GridContainer = styled.div`
  height: 100vh;
  width: 95vw;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 17% 44% 36%;
  gap: 10px;
  .grid-item2,
  .grid-item3 {
    background-color: white;
  }
`;
export const GridContainer1 = styled.div`
  height: 100vh;
  width: 95vw;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 16% 1fr;
  gap: 10px;
  .grid-item2,
  .grid-item3 {
    background-color: white;
  }
  .grid-item2 {
    margin-top: 20px;
    border-radius: 0.375rem;
  }
`;
export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
`;
export const TableContainer = styled.div`
  padding: 20px 40px;
  table {
    width: 100%;
  }
  tr:nth-child(even) {
    background-color: #f3f4f6;
  }

  .firstRow th {
    text-align: start;
    padding: 0px 0px 15px;
    color: #707070;
    //  font-size:20px;
  }
  .firstCol {
    display: flex;
    margin-left: 15px;
  }
  .firstCol div {
    border: 1px solid #8c8c8c;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    background-color: #8c8c8c;
    margin-right: 25px;
    color: #ffffff;
  }
  .secondCol {
    border: 1px solid #ebebeb;
    padding: 20px;
  }
  .secondCol td {
    padding: 20px 0;
  }
  .ver {
    color: green;
  }
  .n-ver {
    color: red;
  }
  .firstRow .namecol {
    width: 270px;
    padding-left: 40px;
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  .userpharg {
    font-size: 25px;
    font-weight: 600;
  }
`;
export const BiSearchIcon = styled(BiSearch)`
  position: absolute;
  margin-top: 15px;
  font-size: 22px;
  margin-left: 30px;
`;
export const HiOutline = styled(HiAdjustmentsHorizontal)`
  position: absolute;
  margin-top: 15px;
  font-size: 22px;
  right: 0;
  margin-right: 55px;
  cursor: pointer;
`;
export const ListContainer = styled.div`
  background-color: #ffffff;
  width: 245px;
  height: 226px;
  position: absolute;
  right: 0;
  margin-right: 69px;
  margin-top: -17px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 25px 40px;
  .lilist {
    padding-bottom: 20px;
    display: flex;
    align-items: center;
  }
  .checklist {
    margin-right: 20px;
    width: 15px;
    height: 15px;
    }
`;
export const ListContainer1 = styled.div`
background-color: #ffffff;
  width: 200px;
  height: 150px;
  position: absolute;
  right: 0;
  margin-right: 95px;
  margin-top: -5px;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  padding: 25px 40px;

`
