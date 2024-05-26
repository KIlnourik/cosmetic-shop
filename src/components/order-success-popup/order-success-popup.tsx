import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';
import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getOrderStatus } from '../../store/order-process/selector';
import { useNavigate } from 'react-router-dom';
import { resetOrderStatus } from '../../store/order-process/order-process';
import { AppRoute } from '../../const';
import { resetCoupon } from '../../store/coupon-process/coupon-process';
import { resetCart } from '../../store/cart-process/cart-process';


function OrderSuccessPopup(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const orderStatus = useAppSelector(getOrderStatus);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    orderStatus && setOpen(true);
  }, [orderStatus]);

  const handleClose = () => {
    dispatch(resetCoupon());
    dispatch(resetCart());
    dispatch(resetOrderStatus());
    setOpen(false);
  };

  const handleCatalog = () => {
    handleClose();
    navigate(AppRoute.Catalog);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title' >
        <Logo />
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center', mt: 5, mb: 5 }}>
        <DialogContentText id='alert-dialog-description' sx={{ fontSize: '20px', fontWeight: 500 }}>
          Ваш заказ успешно оформлен
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button onClick={handleClose}>ОК</Button>
        <Button onClick={handleCatalog}>В Каталог</Button>
      </DialogActions>
    </Dialog>
  );
}

export default OrderSuccessPopup;
