import InputSlider from "./metersPanel";
import Grid from "@mui/material/Grid";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Grid container justifyContent="space-evenly"
                      spacing={3} direction="column" alignItems="flex-start">
                    <Grid item>
                        <InputSlider id='1'/>
                    </Grid>
                    <Grid item>
                        <InputSlider id='2'/>
                    </Grid>
                    <Grid item>
                        <InputSlider id='3'/>
                    </Grid>
                </Grid>
            </header>
        </div>
    );
}

export default App;
