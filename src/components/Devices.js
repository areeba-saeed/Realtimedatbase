import "./datatable.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { set, onValue, ref, get, child, remove } from "firebase/database";
import { db } from "./firebase-config";
import uuid from "uuid";
const Devices = () => {
  const devicesAll = [
    {
      id: 1,
      status: "Excellent",
      weight: 5,
      battery: 88,
      longitude: 3.5544,
      latitude: 3.5544,
    },
    {
      id: 2,
      status: "Excellent",
      battery: 88,
      weight: 5,
      longitude: 3.5544,
      latitude: 3.5544,
    },
    {
      id: 3,
      status: "Excellent",
      battery: 88,
      weight: 5,
      longitude: 3.5544,
      latitude: 3.5544,
    },
  ];
  const [data, setData] = useState([]);
  const [gasData, setGasdata] = useState([]);

  useEffect(() => {
    return onValue(ref(db, `/gas`), (querySnapShot) => {
      // let gas = querySnapShot.val();
      querySnapShot.forEach((childSnapshot) => {
        console.log(childSnapshot.val());
        setData((oldValue) => [...oldValue, childSnapshot.val()]);
      });

      // for (let gases in gas) {
      // }

      // console.log(gasRef);
      // console.log(gasRef);
    });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  console.log(data);

  const deviceColumns = [
    { field: "Device_id", headerName: "DeviceID", width: 150 },
    { field: "battery", headerName: "Battery", width: 150 },
    {
      field: "weight",
      headerName: "Weight",
      width: 230,
    },

    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "longitude",
      headerName: "Longitude",
      width: 150,
    },
    {
      field: "latitude",
      headerName: "Latitude",
      width: 150,
    },
  ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.Device_id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Devices
        <Link to="/add" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        getRowId={(row) => row.Device_id}
        columns={deviceColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default Devices;
