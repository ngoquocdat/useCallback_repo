import * as React from "react";
import Stack from "@mui/material/Stack";
import SkeletonTextField, {
  ISkeletonTextField
} from "./SkeletonUIs/SkeletonTextField";
import { Button, Typography } from "@mui/material";
import SkeletonTypography from "./SkeletonUIs/SkeletonTypography";
import SkeletonParagraph from "./SkeletonUIs/SkeletonParagraph";
import SkeletonAvatar from "./SkeletonUIs/SkeletonAvatar";
import SkeletonDialog from "./SkeletonUIs/SkeletonDialog";
import {
  ISkeletonButtonGroup,
  SkeletonButton,
  SkeletonButtonGroup
} from "./SkeletonUIs/SkeletonButton";
import DataGridDemo from "./DataGrid";

export default function Variants() {
  const SkeletonTextFieldOpts: ISkeletonTextField = {
    titleVariant: "body1",
    options: {
      animation: "wave",
      style: {
        title: {
          fontSize: "1rem",
          width: 100
        },
        textArea: {
          width: 200,
          height: 40
        }
      }
    }
  };
  const SkeletonTextAreaOpts: ISkeletonTextField = {
    options: {
      animation: "wave",
      style: {
        textArea: {
          width: 200,
          height: 260
        }
      }
    }
  };
  const SkeletonParagraphOpts: ISkeletonTextField = {
    options: {
      style: {
        marginTop: "0px"
      }
    }
  };
  const dialogContentStyle = {
    style: {
      width: "300px"
    }
  };

  const buttonsSkeleton: ISkeletonButtonGroup = {
    wrapperWidth: 200,
    buttons: [{ size: "small" }, { size: "large" }, { size: "large" }]
  };

  const dialogButtonsSkeleton: ISkeletonButtonGroup = {
    buttons: [{ size: "small" }, { size: "small" }]
  };

  const dialogContents = () => {
    return <SkeletonParagraph lines={10} options={{ ...dialogContentStyle }} />;
  };

  const dialogContentsWithBlocks = () => {
    return (
      <>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "space-evenly",
            paddingBottom: "20px",
            gap: "10px"
          }}
        >
          <div style={{ display: "block", width: "50%" }}>
            <SkeletonTextField {...SkeletonTextFieldOpts} />
            <SkeletonTextField {...SkeletonTextFieldOpts} />
          </div>
          <div style={{ display: "block", width: "50%" }}>
            <SkeletonTextField {...SkeletonTextFieldOpts} />
            <SkeletonTextField {...SkeletonTextFieldOpts} />
            <SkeletonTextField {...SkeletonTextFieldOpts} />
          </div>
        </div>
        <SkeletonParagraph lines={3} {...SkeletonParagraphOpts} />
      </>
    );
  };

  return (
    <Stack spacing={1}>
      <Typography variant="body1">Text field skeleton</Typography>
      <SkeletonTextField {...SkeletonTextFieldOpts} />

      <br />
      <Typography variant="body1">Header</Typography>
      <SkeletonTypography variant="h3" style={{ width: 260 }} loading />

      <br />
      <Typography variant="body1">Text area</Typography>
      <SkeletonTextField {...(SkeletonTextAreaOpts as ISkeletonTextField)} />

      <br />
      <Typography variant="body1">Paragraph</Typography>
      <SkeletonParagraph lines={10} {...SkeletonParagraphOpts} />

      <br />
      <Typography variant="body1">Avatar circle</Typography>
      <div style={{ display: "flex", gap: "15px" }}>
        <SkeletonAvatar avatarDemension={40} />
        <SkeletonAvatar avatarDemension={60} />
        <SkeletonAvatar avatarDemension={100} />
        <SkeletonAvatar avatarDemension={100} variant="rectangular" />
      </div>

      <br />
      <Typography variant="body1">Button Skeleton</Typography>
      <div style={{ display: "flex", gap: "15px" }}>
        <SkeletonButton size="medium" />
        <SkeletonButton size="large" />
      </div>

      <br />
      <Typography variant="body1">Button Group</Typography>
      <SkeletonButtonGroup {...buttonsSkeleton} />

      <br />
      <Typography variant="body1">Dialog</Typography>
      <SkeletonDialog
        buttonLabel={"Open dialog"}
        contentChildrens={dialogContents()}
        dialogButtons={dialogButtonsSkeleton}
      />
      <SkeletonDialog
        buttonLabel={"Open blocks dialog"}
        contentChildrens={dialogContentsWithBlocks()}
        dialogButtons={dialogButtonsSkeleton}
      />

      <br />
      <Typography variant="body1">Datagrid</Typography>
      <DataGridDemo />

      <br />
    </Stack>
  );
}
