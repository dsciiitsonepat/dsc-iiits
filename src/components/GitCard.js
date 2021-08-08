import React, { useEffect, useState } from "react"
import StackedAvatar from "./StackAvatar"
import { Card, CardContent, CardMedia, Typography, makeStyles, useTheme } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    minHeight: "25vh",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    textAlign: "start",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  cover: {
    width: 165,
    [theme.breakpoints.down("md")]: {},
  },
  stack: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}))

export default function GitCard({ project }) {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [contributors, setContributors] = useState([])

  useEffect(() => {
    const getContributors = async () => {
      const response = await fetch(`https://api.github.com/repos/dsciiitsonepat/${project.name}/contributors`)
      const data = await response.json()
      const avatar = []
      data.forEach((contributor) => {
        avatar.push({
          githubHandle: contributor.login,
          avatar: contributor.avatar_url,
        })
      })
      setContributors(avatar)
    }
    getContributors()
  }, [project.name])

  return (
    <a href={project.svn_url} style={{ color: "#000", textDecoration: "none" }}>
      <Card className={classes.root} elevation={5}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body2" component="p">
              {project.description}
            </Typography>
          </CardContent>
          <div className={classes.stack}>
            <StackedAvatar maxAvatars={3} round={true} size={35} avatars={contributors} />
          </div>
        </div>
        <CardMedia className={classes.cover} image={project.owner.avatar_url} />
      </Card>
    </a>
  )
}
