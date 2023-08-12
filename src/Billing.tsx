import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface BillingData {
  serviceName: string;
  consultingFee: number;
  discount: number;
}

const getInitialRow = (): BillingData => ({
  serviceName: "",
  consultingFee: 0,
  discount: 0,
});

const Billing: React.FC = () => {
  const [rows, setRows] = useState<BillingData[]>([getInitialRow()]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleAddMore = () => {
    setRows([...rows, getInitialRow()]);
  };

  const handleCancel = () => {
    setRows([getInitialRow()]);
  };

  const handleRemoveRow = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogConfirm = () => {
    setOpenDialog(false);
  };

  const handlePrintBill = () => {
    setOpenDialog(true);
  };
  const calculateTotalAmount = () => {
    return rows.reduce(
      (sum, row) =>
        sum + (Number(row.consultingFee) || 0) - (Number(row.discount) || 0),
      0
    );
  };

  return (
    <div style={{ marginLeft: 380 }}>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Service Name</TableCell>
                <TableCell>Consulting Fee</TableCell>
                <TableCell>Discount</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Select
                      value={row.serviceName}
                      onChange={(e) => {
                        const newValue = e.target.value as string;
                        const updatedRows = [...rows];
                        updatedRows[index].serviceName = newValue;
                        setRows(updatedRows);
                      }}
                      displayEmpty
                    >
                      <MenuItem disabled value="">
                        Select Service {/* Placeholder text */}
                      </MenuItem>
                      <MenuItem value="firstVisit">First Visit</MenuItem>
                      <MenuItem value="secondVisit">Second Visit</MenuItem>
                      <MenuItem value="followUp">Follow-up</MenuItem>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <TextField
                      style={{ width: 100 }}
                      type="number"
                      value={row.consultingFee !== 0 ? row.consultingFee : ""}
                      onChange={(e) => {
                        const newValue = parseFloat(e.target.value);
                        const updatedRows = [...rows];
                        updatedRows[index].consultingFee = newValue;
                        setRows(updatedRows);
                      }}
                      placeholder="Enter"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      style={{ width: 100 }}
                      type="number"
                      value={row.discount !== 0 ? row.discount : ""}
                      onChange={(e) => {
                        const newValue = parseFloat(e.target.value);
                        const updatedRows = [...rows];
                        updatedRows[index].discount = newValue;
                        setRows(updatedRows);
                      }}
                      placeholder="Enter"
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    {isNaN(row.consultingFee) || isNaN(row.discount)
                      ? ""
                      : row.consultingFee - row.discount}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleRemoveRow(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell>Total:</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>{calculateTotalAmount()}</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: 20,
        }}
      >
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleAddMore}>Add More</Button>
        <Button variant="contained" color="primary" onClick={handlePrintBill}>
          Submit
        </Button>
      </div>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>CheckIn Successful</DialogTitle>
        <DialogContent>
          <Typography>Do you want to print the bill?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogConfirm} color="primary" autoFocus>
            Yes
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Billing;
