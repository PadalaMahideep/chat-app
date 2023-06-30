import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Panel, Row, Col, Button, Icon, Alert } from 'rsuite';
import { auth, database } from '../misc/firebase';
const SignIn = () => {
  const SignInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);
      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }
      Alert.success('login successfully', 4000);
    } catch (err) {
      Alert.error(err.message, 4000);
    }
  };

  const onClickFacebook = () => {
    SignInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onClickGoogle = () => {
    SignInWithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h2>Welcome to chat </h2>
                <p>Prograssive chat platform for neophytes</p>
              </div>
              <div>
                <Button
                  block
                  color="blue"
                  className="mt-3"
                  onClick={onClickFacebook}
                >
                  <Icon icon="facebook" /> Continue with Facebook
                </Button>

                <Button block color="green" onClick={onClickGoogle}>
                  <Icon icon="google" /> Continue with google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
