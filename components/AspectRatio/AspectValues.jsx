import { aspectOutput } from '../../constants/aspectRatio'

import { Grid, TextField, InputAdornment, IconButton } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const AspectValues = ({ values }) => {
    return (
        <>
            {aspectOutput.map((output, index) => (
                <Grid key={index} item sm={6} xs={12}>
                    <TextField
                        fullWidth
                        focused
                        readOnly
                        variant='outlined'
                        label={output.label}
                        name={output.name}
                        value={values[output.name]}
                        autoComplete='none'
                        sx={{
                            '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
                                color: 'text.primary',
                            },
                        }}
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton aria-label='copy value to clipboard' onClick={() => navigator.clipboard.writeText(values[output.name])} edge='end'>
                                        <ContentCopyIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            ))}
        </>
    )
}

export default AspectValues
