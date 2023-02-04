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
  personalInfo: state.personalInfoReducer.personalInfo, // mapping state to get personalInfo from the reducer
});

const mapDispatchToProps = (dispatch) => ({
  onAddPersonalInfo: (details) => dispatch(addPersonalInfo(details)), // dispatching action to add personal info
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2), // setting padding for dialog content
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1), // setting padding for dialog actions
  },
}));


const PersonalInfo = (props) => {
  const [loading, setLoading] = useState(false); // state to control loading spinner
  const [imgSnackbar, setImgSnackbar] = useState(false); // state to control image snackbar
  const [vertical, ] = useState("top"); // state to control vertical position of snackbar
  const [horizontal, ] = useState("center"); // state to control horizontal position of snackbar

  const { handleSubmit, register, formState: { errors }} = useForm(); // using useForm hook to handle form submissions

  const [img, setImg] = useState(
    props.personalInfo.profileImg.length ? props.personalInfo.profileImg : "" // state to control profile image
  );
  const [, setStoreImage] = useState([]); // state to store images

  const [open, setOpen] = useState(false); // state to control modal open/close

  const handleClickOpen = () => { // function to open the modal
    setOpen(true);
  };
  const handleClose = () => { // function to close the modal
    setOpen(false);
  };

  const handleNext = (data) => { // function to handle form submission
    if (img.length) {
      setLoading(true);
      props.onAddPersonalInfo({ profileImg: img, ...data }); // calling onAddPersonalInfo function from mapDispatchToProps to add personal info
      setTimeout(() => {
        setLoading(false);
        props.setClick(props.click + 1) // incrementing the click state by 1
      }, 1000);
    } else {
      setImgSnackbar(true); // setting imgSnackbar to true if no profile image is selected
    }
  }

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
              color: (theme) => theme.palette.grey[500], // setting color of close icon
            }}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

// Set the image after cropping it using the onCrop function
const onCrop = (view) => {
  setImg(view);
  };
  
  // Set the image to null when the cropping process is closed
  const onClose = (view) => {
  setImg(null);
  };
  
  // Save the cropped image and set the state of the modal to closed
  const saveImage = () => {
  // storeImage([])
  setStoreImage([{ img }]);
  setOpen(false);
  };
  
  // Close the snackbar if the close icon or outside of the snackbar is clicked
  const handleCloseSnackbar = (event, reason) => {
  if (reason === "clickaway") {
  return;
  }
  setImgSnackbar(false);
  };
  
  // Get the inner width and height of the window
  const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
  };
  
  // Set the state of windowSize to the value returned from getWindowSize function
  const [windowSize, setWindowSize] = useState(getWindowSize());
  
  // Use Effect hook to handle window resize event
  useEffect(() => {
  function handleWindowResize() {
  setWindowSize(getWindowSize());
  }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Paper className='Paper' elevation={4} >
      <Avatar
        sx={{ width: 130, height: 130, margin: '20px 0px 0px 20px' }}
        alt="profile img"
        src={img.length ? img : "https://img.icons8.com/ios11/600/228BE6/user.png"}
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
      <form className='inputs' onSubmit={handleSubmit(handleNext)}>
        <div className='grido'>
          <Input
            className="FirstName"
            label={"First Name"}
            type={"text"}
            name={"firstName"}
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
            name={"lastName"}
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
            name={"email"}
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
            name={"mobile"}
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
          name={"address"}
          // multiline={true}
          // rows={2}
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
            name={"city"}
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
            name={"state"}
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
            name={"pinCode"}
            register={register}
            value={props.personalInfo.pinCode}
            setValue={(value) =>
              props.onAddPersonalInfo({
                ...props.personalInfo,
                pinCode: value,
              })}
            error={errors.pinCode ? true : false}
            errorMessage={errors.pinCode ? errors.pinCode.message : null}
          />
        </div>
        <Input
          className="Objective"
          label={"Objective"}
          type={"text"}
          name={"objective"}
          multiline={true}
          lines={4}
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