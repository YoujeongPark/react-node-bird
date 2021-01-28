import React from 'react'; 
import Head from 'next/head';
import AppLayout from '../components/AppLayout'
import NicknameEditForm from '../components/NicknameEditForm'
import FollowList from '../components/FollowList'



const Profile = () => {
    
    //dummyData 
    const followerList = [{nickname : "가"},{nickname : "나"},{nickname : "다"}]
    const followingList = [{nickname : "라"},{nickname : "마"},{nickname : "사"}]

    return(
        <AppLayout>        
        <Head>
            <title> 내 프로필 | Node Bird </title>
        </Head>
            <NicknameEditForm />
            <FollowList header = "팔로잉 목록" data = "followerList" />     
            <FollowList header = "팔로워 목록" data = "followingList" />     
        </AppLayout>
    );
}

export default Profile; 