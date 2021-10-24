import { makeStyles } from '@material-ui/styles';
import { Theme } from "@mui/material";
import { useTheme } from '@mui/system'

export const useEventCardStyles = () => {
    const theme = useTheme() as Theme;
    const getClasses = makeStyles(() => ({
        eventCardContainer: {
            cursor: 'pointer',
            width: '100%',
            padding: '10px',
            color: theme.palette.common.black,
            transition: '0.15s all',
            borderRadius: '10px',
            background: '#f3f3f3',
            "&:hover": {
                color: theme.palette.common.white,
                background: theme.palette.primary.main
            }
        }

    }));

    const classes = getClasses()
    return {
        classes,
    };
};