import { useSelector } from 'react-redux';
import { Avatar, Grid } from '@mui/material';
import { Card, CardRank, CardCount, CardOwner, CardLink } from './RepoGrid.style';

const RepoGrid = () =>{ 
    const {poprep} = useSelector(state=>state.popRepReducer);
    return(
        <div className='main_wrapper'>
            <Grid container spacing={{ xs: 2, md: 3 }}>
                {poprep.map((repo, index) => {
                    return (
                        <Grid item xs={4}>
                            <Card>
                                <CardRank>#{index + 1}</CardRank>
                                <CardOwner>@{repo.owner.login}</CardOwner>
                                <Avatar sx={{width:'200px', height:'200px',borderRadius:'12px'}} src={repo.owner.avatar_url} alt="Avatar" />
                                <CardCount>{repo.stargazers_count}</CardCount>
                                <CardLink href={repo.html_url} target='_blank' rel="noreferrer">{repo.name}</CardLink>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>
        </div>
)}

export default RepoGrid;
