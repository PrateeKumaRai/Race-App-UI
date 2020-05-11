import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcometoapp',
    pathMatch: 'full'
  },
  {
    path: 'welcometoapp',
    loadChildren: () => import('./welcometoapp/welcometoapp.module').then(m => m.WelcometoappPageModule)
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListPageModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./Employee/employee-details/employee-details.module').then(m => m.EmployeeDetailsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'employee-details',
    loadChildren: () => import('./Employee/employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
  },
  {
    path: 'add-employee',
    loadChildren: () => import('./Employee/add-employee/add-employee.module').then( m => m.AddEmployeePageModule)
  },
  {
    path: 'travelling',
    loadChildren: () => import('./travelling/travelling.module').then( m => m.TravellingPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./travelling/CreateTravelDetails/create.module').then( m => m.CreateTravelModule)
  },
  {
    path: 'findTravelDetail',
    loadChildren: () => import('./travelling/FindTravelDetails/findTravelDetails.module').then( m => m.FindTravelModule)
  },
  {
    path: 'travelDetailRes',
    loadChildren: () => import('./travelling/TravelDetailsResponse/travelDetailsRes.module').then( m => m.TravelDetailsResModule)
  },
  {
    path: 'createTravelDetail',
    loadChildren: () => import('./travelling/CreateTravelDetailRes/createTravelDetailsResponse.module').then( m => m.CreateTravelDetailsResModule)
  },
  {
    path: 'welcometoapp',
    loadChildren: () => import('./welcometoapp/welcometoapp.module').then( m => m.WelcometoappPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'capasset',
    loadChildren: () => import('./cap-asset/cap-asset.module').then( m => m.CapAssetPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'asset-res',
    loadChildren: () => import('./asset-res/asset-res.module').then( m => m.AssetResPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./user-details/user-details.module').then( m => m.UserDetailsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'otp-generate',
    loadChildren: () => import('./otp-generate/otp-generate.module').then( m => m.OtpGeneratePageModule)
  },
  {
    path: 'otp-validate',
    loadChildren: () => import('./otp-validate/otp-validate.module').then( m => m.OtpValidatePageModule)
  },
  {
    path: 'add-asset',
    loadChildren: () => import('./add-asset/add-asset.module').then( m => m.AddAssetPageModule)
  },
  {
    path: 'update-assert',
    loadChildren: () => import('./update-assert/update-assert.module').then( m => m.UpdateAssertPageModule)
  },
  {
    path: 'update-assert/:id',
    loadChildren: () => import('./update-assert/update-assert.module').then( m => m.UpdateAssertPageModule)
  },
  {
    path: 'asset-list',
    loadChildren: () => import('./add-asset/asset-list/asset-list.module').then( m => m.AssetListPageModule)
  }, 
   {
    path: 'asset-details',
    loadChildren: () => import('./add-asset/asset-details/asset-details.module').then( m => m.AssetDetailsPageModule)
  },
  
  {
    path: 'update-profile',
    loadChildren: () => import('./update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'updateTravelDetail',
    loadChildren: () => import('./travelling/UpdateTravelDetail/update.module').then(m => m.UpdateTravelModule)
  },



  
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/qz_home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'admin',
    loadChildren: () => import('./quiz/qz_admin/admin.module').then( m => m.AdminPageModule)
  },

  {
    path: 'createquiz',
    loadChildren: () => import('./quiz/qz_createquiz/createquiz.module').then( m => m.CreatequizPageModule)
  },
  {
    path: 'addquestion',
    loadChildren: () => import('./quiz/qz_addquestion/addquestion.module').then( m => m.AddquestionPageModule)
  },
  {
    path: 'quizdash',
    loadChildren: () => import('./quiz/qz_admin_quizdash/quizdash.module').then( m => m.QuizdashPageModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./quiz/qz_player/player.module').then( m => m.PlayerPageModule)
  },
  {
    path: 'playquiz',
    loadChildren: () => import('./quiz/qz_playquiz/playquiz.module').then( m => m.PlayquizPageModule)
  },
  {
    path: 'playquiz/startquiz',
    loadChildren: () => import('./quiz/qz_playquiz/start_quiz/startquiz.module').then( m => m.StartquizPageModule)
  },
  {
    path: 'admindashboard/adminplayquiz/adminstartquiz',
    loadChildren: () => import('./quiz/qz_admin_quizdash/admin_start_quiz/adminstartquiz.module').then( m => m.AdminStartquizPageModule)
  },
  {
    path: 'admindashboard/adminplayquiz',
    loadChildren: () => import('./quiz/qz_admin_quizdash/admin_play_quiz/adminplayquiz.module').then( m => m.AdminPlayquizPageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./quiz/qz_admin_quizdash/admin_dashboard_quiz/adminplayquiz.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'admindashboard/adminplayquiz/adminstartquiz/adminshowresult',
    loadChildren: () => import('./quiz/qz_admin_quizdash/admin_show_result/adminshowresult.module').then( m => m.AdminShowResultPageModule)
  },
  {
    path: 'email-login',
    loadChildren: () => import('./email-login/email-login.module').then( m => m.EmailLoginPageModule)
  },
  {
    path: 'update-profile-personal',
    loadChildren: () => import('./update-profile-personal/update-profile-personal.module').then( m => m.UpdateProfilePersonalPageModule)
  },
  {
    path: 'update-seat',
    loadChildren: () => import('./update-seat/update-seat.module').then( m => m.UpdateSeatPageModule)
  },
  {
    path: 'get-employee',
    loadChildren: () => import('./Employee/get-employee/get-employee.module').then( m => m.GetEmployeePageModule)
  },
  {
    path: 'get-asset',
    loadChildren: () => import('./add-asset/get-asset/get-asset.module').then( m => m.GetAssetPageModule)
  },
  {
    path: 'get-all-asset',
    loadChildren: () => import('./add-asset/get-all-asset/get-all-asset.module').then( m => m.GetAllAssetPageModule)
  },
  {
    path: 'filter-data',
    loadChildren: () => import('./employee/filter-data/filter-data.module').then( m => m.FilterDataPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
