import classes from "./UpdateProfile.module.css"
const UpdateProfile=()=>{
    return(
            <form className={classes.form}>
                <h1>Update Profile</h1>
                <div>
                    <div>
                        <label>Full Name</label>
                        <input type='text'></input>
                    </div>
                    <div>
                        <label>Profile Photo URL</label>
                        <input type='text'></input>
                    </div>
                </div>
                <button>Update</button>
            </form>
    )
}
export default UpdateProfile