import React from 'react'
import theme from '../theme/theme';
import {useState,useEffect} from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from "react-select";
import axios from 'axios';
import { Autocomplete } from '@mui/material';
import FullLayout from "../components/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
  } from "@mui/material";
  import BaseCard from '../components/baseCard/BaseCard';

  const AddSale = (theme) => {
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   Axios.get('http://localhost:3001/api/getProduct').then((response) => {
  //     setProduct(response.data);
  //     console.log(response.data);

  //   });
  // }, []);
  // const options = product.map((p) => ({
  //   id: p.id,
  //   name: p.name,
  // }));
  
  const user=JSON.parse(localStorage.getItem('user-info'))
  const [userName, setUserNaME]=useState(user.name)
  const[userRole,setUserRole]=useState(user.name)
  const[saleDate,setSaleDate]=useState();
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [errors, setErrors] = useState({});
  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleClearForm = () => {
    setProduct('');
    setQuantity('');
    setTotal(0);
  };
  const validateForm = () => {
    let isValid = true;
    let errors = {};
    if (!product) {
      errors.product = "Product code is required";
      isValid = false;
    }
    if (!quantity) {
      errors.quantity = " quantity is required";
      isValid = false;
    } else if (quantity < 0) {
      errors.quantity = "Stock quantity must be a positive number";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  }
  const AddSale = (event) => {
    event.preventDefault();
  }

    const data={
        product: product,
        Qstock:quantity,
        assigned:userName,
        role:userRole,
        total:total,
        saleDate:saleDate,
    };
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ textAlign: 'left' }}>
        <BaseCard title="Add Sale">
        <form onSubmit={AddSale}>
          <Stack spacing={1}  sx={{ marginTop: '-50px', paddingTop: '10px' }} >
          {/* <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
      {...params}
      label="Select a Product"
      variant="outlined"
       error={errors.product}
       helperText={errors.product}
    />
  )}
  onChange={handleProductChange}
  sx={{ width: "60%" }}
/>
                   */}
                  <TextField
        fullWidth
        id="quantity-input"
        label="Quantity"
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        sx={{ mb: 2 }}
      />
              
              <TextField
        fullWidth
        id="total-input"
        label="Total"
        type="number"
        value={total}
        InputProps={{
          readOnly: true,
        }}
      />  
              

          </Stack>
          <br />
          <Button type='submit' variant="contained" mt={2}>
            Submit
          </Button>
          <Button variant="outlined" sx={{ ml: '10px' }} onClick={handleClearForm}>
  Clear Form
</Button>
</form>
        </BaseCard>
      </Grid>
      </Grid>
      </FullLayout>
      </ThemeProvider>
  )
}

export default AddSale