// import * as React from "react";
// import { Navigate } from "react-router-dom";

// // class Stepper extends React.Component {
// //   state = { user: null, error: null };

// //   async handleSubmit(event) {
// //     event.preventDefault();
// //     try {
// //       let user = await login(event.target);
// //       this.setState({ user });
// //     } catch (error) {
// //       this.setState({ error });
// //     }
// //   }

// //   render() {
// //     let { user, error } = this.state;
// //     return (
// //       <div>
// //         {error && <p>{error.message}</p>}
// //         {user && (
// //           <Navigate to="/dashboard" replace={true} />
// //         )}
// //         <form
// //           onSubmit={(event) => this.handleSubmit(event)}
// //         >
// //           <input type="text" name="username" />
// //           <input type="password" name="password" />
// //         </form>
// //       </div>
// //     );
// //   }
// export class RouterLink {
//     ...
  
//     @HostListener('click')
//     onClick(): boolean {
//       ...
//       this.router.navigateByUrl(this.urlTree, extras);
//       return true;
//     }
// }