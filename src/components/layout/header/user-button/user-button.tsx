import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../const';
import { MouseEvent, useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthStatus, getUserData } from '../../store/user-process/selector';
import { dropToken } from '../../services/token';
import { UserData } from '../../types/user-data';
import { resetCart } from '../../store/cart-process/cart-process';
import { logoutAction } from '../../store/user-process/user-process';

function UserButton(): JSX.Element {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthStatus);
  const userData = useAppSelector(getUserData);
  const [user, setUser] = useState<UserData | undefined>(undefined);

  const handleUser = () => {
    navigate(`/users/${userData?.id}`);
  };

  const handleLogout = () => {
    dropToken();
    setUser(undefined);
    dispatch(resetCart());
    dispatch(logoutAction());
    navigate(AppRoute.Login);
  };

  const handleLogin = () => {
    navigate(AppRoute.Login);
  };

  useEffect(() => {
    userData && setUser(userData);
  }, [userData]);

  return (
    <>
      <Box
        className='user-actions__link user-actions__user'
        aria-label='Пользователь'
        aria-controls={open ? 'menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          padding: 0,
          ':hover': {
            cursor: 'pointer'
          }
        }}
      >
        <svg height='21' width='16'>
          <use xlinkHref='#user-icon'></use>
        </svg>
      </Box>
      {
        (authStatus === AuthStatus.Auth && user)
          ?
          <Menu
            id="menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleUser}>{user.email}</MenuItem>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
          </Menu>
          :
          <Menu
            id="menu"
            aria-labelledby="positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleLogin}>Войти</MenuItem>
          </Menu>
      }
    </>
  );
}

export default UserButton;
