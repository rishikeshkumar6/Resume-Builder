import { Avatar, Button, Divider, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar } from '@mui/material'
import { useState, useEffect } from 'react'
import './PersonalInfo.css'
import Input from '../Input/Input'
import { connect } from "react-redux";
import { addPersonalInfo } from "../../Redux/actions/actions";
import NextnBackBTN from '../NextnBackBTN/NextnBackBTN.js';
import Avatar1 from "react-avatar-edit";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";



const mapStateToProps = (state) => ({
  personalInfo: state.personalInfoReducer.personalInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)),
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const PersonalInfo = (props) => {
  const [vertical, ] = useState("top");
  const [horizontal, ] = useState("center");
  const [, setStoreImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState(props.personalInfo.profileImg.length ? props.personalInfo.profileImg : "")
  const [imgSnackbar, setImgSnackbar] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleBackNext = (data) => {
    if (img.length) {
      setLoading(true);
      props.onAddPersonalInfo({ profileImg: img, ...data });
      setTimeout(() => {
        setLoading(false);
        props.setClick(props.click + 1)
      }, 1000);
    } else {
      setImgSnackbar(true);
    }
  }

  const onCrop = (view) => {
    setImg(view);
  };

  const onClose = (view) => {
    setImg(null);
  };

  const saveImage = () => {
    // storeImage([])
    setStoreImage([{ img }]);
    setOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setImgSnackbar(false);
  };

  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  return (
    <Paper className='Paper' elevation={4} >
      <Avatar
        sx={{ width: 130, height: 130, margin: '20px 0px 0px 20px' }}
        alt="profile img"
        src={img.length ? img : "https://cdn-icons-png.flaticon.com/512/1160/1160865.png"}
      />
      <div className='change-profile'>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
        >Set Profile Picture</Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}>
            Update Image
          </BootstrapDialogTitle>
          <DialogContent>
            <Avatar1
              width={windowSize.innerWidth > 900 && 400}
              height={windowSize.innerWidth > 500 ? 400 : 150}
              onCrop={onCrop}
              onClose={onClose}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant="contained" onClick={saveImage}>
              Save
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
      <Divider />
      <form className='inputs' onSubmit={handleSubmit(handleBackNext)}>
        <div className='grido'>
          <Input
            className="FirstName"
            label={"First Name"}
            type={"text"}
            register={register}
            value={props.personalInfo.firstName}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                firstName: value,
              })}
            error={errors.firstName ? true : false}
            errorMessage={errors.firstName ? errors.firstName.message : null}
          />
          <Input
            className="LastName"
            label={"Last Name"}
            type={"text"}
            register={register}
            value={props.personalInfo.lastName}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                lastName: value,
              })}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName ? errors.lastName.message : null}
          />
          <Input
            className="Email"
            label={"Email"}
            type={"email"}
            register={register}
            value={props.personalInfo.email}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                email: value,
              })}
            error={errors.email ? true : false}
            errorMessage={errors.email ? errors.email.message : null}
          />
          <Input
            className="Mobile"
            label={"Mobile Number"}
            type={"number"}
            register={register}
            value={props.personalInfo.mobile}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                mobile: value,
              })}
            error={errors.mobile ? true : false}
            errorMessage={errors.mobile ? errors.mobile.message : null}
          />
        </div>
        <Input
          className="Address"
          label={"Address"}
          type={"text"}
          register={register}
          value={props.personalInfo.address}
          setValue={(value) =>
            props.onAddPersonalInfo({
              ...props.personalInfo,
              address: value,
            })}
          error={errors.address ? true : false}
          errorMessage={errors.address ? errors.address.message : null}
        />
        <div className='grido'>
          <Input
            className="City"
            label={"City"}
            type={"text"}
            register={register}
            value={props.personalInfo.city}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                city: value,
              })}
            error={errors.city ? true : false}
            errorMessage={errors.city ? errors.city.message : null}
          />
          <Input
            className="State"
            label={"State"}
            type={"text"}
            register={register}
            value={props.personalInfo.state}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                state: value,
              })}
            error={errors.state ? true : false}
            errorMessage={errors.state ? errors.state.message : null}
          />
          <Input
            className="PinCode"
            label={"Pin Code"}
            type={"number"}
            register={register}
            value={props.personalInfo.pinCode}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                pinCode: value,
              })}
            error={errors.pinCode ? true : false}
            errorMessage={errors.pinCode ? errors.postalCode.message : null}
          />
        </div>
        <Input
          className="Objective"
          label={"Objective"}
          type={"text"}
          register={register}
          value={props.personalInfo.objective}
          setValue={(value) =>
            props.onAddPersonalInfo({
              ...props.personalInfo,
              objective: value,
            })}
          error={errors.objective ? true : false}
          errorMessage={errors.objective ? errors.objective.message : null}
        />
        <Divider />
        <NextnBackBTN
          loading={loading}
          click={props.click}
          nextbtn={"Next"}
        />
      </form>
      <Snackbar
        message="Select a profile picture"
        key={vertical + horizontal}
        anchorOrigin={{ vertical, horizontal }}
        open={imgSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      />
    </Paper>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonalInfo);