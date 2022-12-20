import {
    Dialog,
    Paper,
    Grid
} from "@mui/material"

const MovieDialog = ({ open, handleCloseDialog, movieBg, title, overview }) => {
    return (
        <Dialog sx={{width: 500}} open={open} onClose={handleCloseDialog}>
                <img src={movieBg} alt={title} style={{width: '100%', height: '100%'}} />
                <Grid>

                </Grid>
        </Dialog>
    )
}

export default MovieDialog