import React, { useState, FormEvent } from 'react'
import { Redirect, Route, RouteComponentProps } from 'react-router-dom'
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import UsersListPage from './UsersListPage'

interface UserDetailPageProps
    extends RouteComponentProps<{
        id: string
    }> {}

const UserDetailPage: React.FC<UserDetailPageProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>User Detail</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>User {match.params.id}</IonContent>
        </IonPage>
    )
}

export default UserDetailPage
