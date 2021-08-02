import React, { useEffect,useState } from "react";
import StackedAvatar from "./StackAvatar";
import { Card, CardContent, CardMedia, Typography, makeStyles,useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius:"10px",
	height:"65%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 165,
  },
  stack: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));


export default function GitCard ({project}) {
	const classes = useStyles();
	const theme = useTheme();
	const [contributors, setContributors] = useState([])

	useEffect(() => {
		const getContributors = async () => {
			const response = await fetch(`https://api.github.com/repos/dsciiitsonepat/${project.name}/contributors`)
			const data = await response.json()
			const avatar = []
			console.log(data)
			data.forEach(contributor => {
				avatar.push({githubHandle: contributor.login, avatar: contributor.avatar_url})
			})
			setContributors(avatar)
		}
		getContributors();
	}, [])

    return (
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
        <CardMedia className={classes.cover} image={project.owner.avatar_url}/>
      </Card>
    );
  }