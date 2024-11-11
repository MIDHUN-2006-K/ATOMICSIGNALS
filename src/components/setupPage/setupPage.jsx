import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import SetUpStep1Image from "../../assets/setUpStep1Image";
import SetUpStep2Image from "../../assets/setUpStep2Image";
import SetUpStep3Image from "../../assets/setUpStep3Image";
import ButtonComponent from "../button/button";
import DownloadDocumentImage from "../../assets/downloadDocument";

function SetUpPage() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#F8F8F8",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      <Box sx={{display:"flex", flexDirection:"column"}}>
        {" "}
        {/* Header Section */}
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, color: "#353448", mb: 1 }}
        >
          Hi Sam!
        </Typography>
        <Typography
          sx={{ fontSize: "16px", color: "#353448", opacity: 0.6, mb: 4 }}
        >
          Let’s set up your organization in a jiffy
        </Typography>
        {/* Steps Section */}
        <Box sx={{ display: "flex", gap: "28px" }}>
          {/* Step 1 - Setup Signals */}
          <Card
            sx={{
              width: "524px",
              height: "683px",
              textAlign: "center",
              padding: 2,
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 1px 10px #0000000A",
              border: "1px solid #F1F1F1",
              borderRadius: "8px",
              opacity: 1,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#6C63FF",
                    mb: 1,
                    background:
                      "transparent linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%) 0% 0% no-repeat padding-box",
                    borderRadius: "18px",
                    opacity: 1,
                  }}
                >
                  Step 1
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#353448", mb: 1  }}
              >
                Setup Signals
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#71707E",
                    opacity: 0.6,
                    mb: 3,
                    marginBottom: "53px",
                  }}
                >
                  Signals are attributes against which you can<br></br> give
                  feedback to someone (e.g., Attitude,<br></br> Efficiency...)
                </Typography>
                <SetUpStep1Image />
              </Box>
              <Box sx={{ marginTop: "170px" }}>
                <ButtonComponent text={"Add signals"} />
              </Box>
            </CardContent>
          </Card>

          {/* Step 2 - Setup Grading */}
          <Card
            sx={{
              width: "524px",
              height: "683px",
              textAlign: "center",
              padding: 2,
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 1px 10px #0000000A",
              border: "1px solid #F1F1F1",
              borderRadius: "8px",
              opacity: 1,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#6C63FF",
                    mb: 1,
                    background:
                      "transparent linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%) 0% 0% no-repeat padding-box",
                    borderRadius: "18px",
                    opacity: 1,
                  }}
                >
                  Step 2
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: "#353448", mb: 1 }}
              >
                Setup Grading
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#71707E",
                    opacity: 0.6,
                    mb: 3,
                    marginBottom: "100px",
                  }}
                >
                  Grading is a framework you can use <br></br>while giving
                  feedback (e.g., Inefficient,<br></br> Neutral...)
                </Typography>
                <SetUpStep2Image />
              </Box>
              <Box sx={{ marginTop: "170px" }}>
                <ButtonComponent text={"Add grading"} />
              </Box>
            </CardContent>
          </Card>

          {/* Step 3 - Import Team Members */}
          <Card
            sx={{
              width: "524px",
              height: "683px",
              textAlign: "center",
              padding: 2,
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 1px 10px #0000000A",
              border: "1px solid #F1F1F1",
              borderRadius: "8px",
              opacity: 1,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#6C63FF",
                    mb: 1,
                    background:
                      "transparent linear-gradient(90deg, #F3F2FF 0%, #F3F2FF00 100%) 0% 0% no-repeat padding-box",
                    borderRadius: "18px",
                    opacity: 1,
                    marginLeft: "45%",
                  }}
                >
                  Step 3
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#00C48C", cursor: "pointer" }}
                >
                  Skip &gt;
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: "#353448", mb: 1 }}
                >
                  Import Team Members
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#71707E",
                    opacity: 0.6,
                    mb: 3,
                    marginBottom: "110px",
                  }}
                >
                  The power is with the people always, you can<br></br> import
                  and bring them here.
                </Typography>
                <SetUpStep3Image />
              </Box>
              <Box sx={{ marginTop: "130px" }}>
                <Typography
                  component="a"
                  href="/path/to/excel-template.xlsx"
                  sx={{
                    fontSize: "16px",
                    color: "#00C48C",
                    textDecoration: "underline",
                    mb: 2,
                  }}
                >
                  <span><DownloadDocumentImage/></span> Click to download excel template
                </Typography>

                <Box>
                  <ButtonComponent text={"Import team members"} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default SetUpPage;
