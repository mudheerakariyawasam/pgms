
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function DashboardCard({ title, count, icon }) {
    return (
        <Box sx={{
            borderRadius: '7px',
            background: '#FFF',
            boxShadow: '0px 13px 20px - 7px rgba(0, 0, 0, 0.15)',
            marginTop: 2
        }}>
            <Box display="flex" justifyContent="space-between" pt={0.5} px={2}>
                <Box mt={-3}  sx={{
                    display:"flex",
                    width:"4rem",
                    height:"4rem",
                    '& .material-icons': {
                        width: "5rem",
                        height: "5rem",
                    }
                }}>
                    <Icon>
                        <img src={icon} alt="Icon" style={{width: '5rem', height: '5rem'}}/>
                    </Icon>
                </Box>
                <Box textAlign="right" lineHeight={1.25} sx={{
                    paddingTop: 1.5
                }}>
                    <Typography variant="button" sx={{
                        color: '#898989',
                        fontFamily: 'Roboto',
                        fontWeight: 400,
                        fontSize: '12px',
                    }}>
                        {title}
                    </Typography>
                    <Typography variant="h4" sx={{
                        fontWeight: 600,
                        fontFamily: 'Inter'
                    }}>
                        {count}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{
                width: '11rem',
                margin: 'auto',
                marginTop: 2,
                marginBottom: 2
            }}/>
            <Box pb={2} px={2}>
                <Typography component="p" variant="button" display="flex">
                    <Typography
                        component="span"
                        variant="button"
                        fontWeight="400"
                        color={'#898989'}
                        sx={{
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            transition: '0.3s',
                            ":hover":{
                                color: '#42424A'
                            }
                        }}
                    >
                        VIEW MORE
                    </Typography>
                </Typography>
            </Box>
        </Box>
    );
}

// Setting default values for the props of DashboardCard
DashboardCard.defaultProps = {
    color: "info",
    percentage: {
        color: "success",
        text: "",
        label: "",
    },
};

// Typechecking props for the DashboardCard
DashboardCard.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
    ]),
    title: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    percentage: PropTypes.shape({
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "white",
        ]),
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        label: PropTypes.string,
    }),
    icon: PropTypes.node.isRequired,
};

export default DashboardCard;
