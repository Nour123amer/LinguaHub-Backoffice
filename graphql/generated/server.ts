import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  Upload: { input: File; output: File; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  isDefault: Scalars['Boolean']['output'];
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  isDefault: Scalars['Boolean']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
};

/** Type of analytics event */
export enum AnalyticsEventType {
  CommentAdded = 'COMMENT_ADDED',
  CommentDeleted = 'COMMENT_DELETED',
  CourseCompleted = 'COURSE_COMPLETED',
  CourseEnrollment = 'COURSE_ENROLLMENT',
  CoursePurchase = 'COURSE_PURCHASE',
  CourseView = 'COURSE_VIEW',
  FavoriteAdded = 'FAVORITE_ADDED',
  FilterApplied = 'FILTER_APPLIED',
  InstructorPageView = 'INSTRUCTOR_PAGE_VIEW',
  LectureViewed = 'LECTURE_VIEWED',
  LessonCompleted = 'LESSON_COMPLETED',
  LessonStarted = 'LESSON_STARTED',
  RatingAdded = 'RATING_ADDED',
  ReviewAdded = 'REVIEW_ADDED',
  SearchPerformed = 'SEARCH_PERFORMED',
  WishlistAdded = 'WISHLIST_ADDED'
}

export type ArchiveCourseInput = {
  archivedDate?: InputMaybe<Scalars['String']['input']>;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type BunnyStreamUploadUrlResponse = {
  __typename?: 'BunnyStreamUploadUrlResponse';
  authorizationExpire: Scalars['Float']['output'];
  authorizationSignature: Scalars['String']['output'];
  libraryId: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  uploadUrl: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  cursor: Scalars['String']['output'];
  node: CategoryItem;
};

export type CategoryItem = {
  __typename?: 'CategoryItem';
  count: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

/** Field to order categories by */
export enum CategoryOrderBy {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type ChangeCourseStatusInput = {
  date?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type Course = {
  __typename?: 'Course';
  _id: Scalars['ID']['output'];
  approvedDate?: Maybe<Scalars['DateTime']['output']>;
  archivedDate?: Maybe<Scalars['DateTime']['output']>;
  courseInformations?: Maybe<Array<Scalars['String']['output']>>;
  courseLevel: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  discountExpiresAt?: Maybe<Scalars['DateTime']['output']>;
  enrollmentCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  instructor: InstructorPublic;
  instructorId: InstructorPublic;
  introFilename?: Maybe<Scalars['String']['output']>;
  introKey?: Maybe<Scalars['String']['output']>;
  introUrl?: Maybe<Scalars['String']['output']>;
  isApproved: Scalars['Boolean']['output'];
  isEnrolled?: Maybe<Scalars['Boolean']['output']>;
  isFavorite?: Maybe<Scalars['Boolean']['output']>;
  isOwner?: Maybe<Scalars['Boolean']['output']>;
  isWishlist?: Maybe<Scalars['Boolean']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  lessons: Array<PublicLesson>;
  lessonsForLearning?: Maybe<Array<Lesson>>;
  objectives?: Maybe<Array<Scalars['String']['output']>>;
  prerequisites: Array<Prerequisite>;
  price: Scalars['Float']['output'];
  publishDate?: Maybe<Scalars['DateTime']['output']>;
  salePrice: Scalars['Float']['output'];
  salesCount: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  viewCount: Scalars['Int']['output'];
  whatWillGain?: Maybe<Array<Scalars['String']['output']>>;
};

export type CourseAnalytics = {
  __typename?: 'CourseAnalytics';
  completionRate?: Maybe<Scalars['Float']['output']>;
  courseId: Scalars['ID']['output'];
  recentActivity: RecentActivityConnection;
  totalStudents: Scalars['Int']['output'];
  totalViews: Scalars['Int']['output'];
};


export type CourseAnalyticsRecentActivityArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type CourseCategories = {
  __typename?: 'CourseCategories';
  languages: Array<CategoryItem>;
  levels: Array<CategoryItem>;
};

export type CourseCategoriesOrderInput = {
  order?: InputMaybe<OrderDirection>;
  orderBy?: InputMaybe<CategoryOrderBy>;
};

export type CourseConnection = {
  __typename?: 'CourseConnection';
  edges: Array<CourseEdge>;
  facts: Filters;
  nodes: Array<Course>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};


export type CourseConnectionFactsArgs = {
  filter?: InputMaybe<CourseFilterInput>;
};


export type CourseConnectionTotalCountArgs = {
  filter?: InputMaybe<CourseFilterInput>;
};

export type CourseEdge = {
  __typename?: 'CourseEdge';
  cursor: Scalars['String']['output'];
  node: Course;
};

export type CourseFilterInput = {
  courseLevel?: InputMaybe<Array<CourseLevel>>;
  hasDiscount?: InputMaybe<Scalars['Boolean']['input']>;
  instructorId?: InputMaybe<Array<Scalars['String']['input']>>;
  language?: InputMaybe<Array<Language>>;
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  maxRating?: InputMaybe<Scalars['Float']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  minRating?: InputMaybe<Scalars['Float']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<CourseStatus>>;
};

export type CourseInfo = {
  __typename?: 'CourseInfo';
  title?: Maybe<Scalars['String']['output']>;
};

/** Level of the course (A1, A2, B1, B2, C1, C2) */
export enum CourseLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2'
}

/** Field to sort courses by */
export enum CourseSortField {
  BestSelling = 'BEST_SELLING',
  CreatedAt = 'CREATED_AT',
  Price = 'PRICE',
  PublishDate = 'PUBLISH_DATE',
  Rating = 'RATING',
  SalePrice = 'SALE_PRICE',
  Title = 'TITLE',
  UpdatedAt = 'UPDATED_AT'
}

export type CourseSortInput = {
  direction?: InputMaybe<OrderDirection>;
  field?: InputMaybe<CourseSortField>;
};

/** Status of the course (automatically calculated) */
export enum CourseStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
  Scheduled = 'SCHEDULED'
}

export type CreateCourseInput = {
  courseInformations?: InputMaybe<Array<Scalars['String']['input']>>;
  courseLevel: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  introFilename?: InputMaybe<Scalars['String']['input']>;
  introKey?: InputMaybe<Scalars['String']['input']>;
  introUrl?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  objectives?: InputMaybe<Array<Scalars['String']['input']>>;
  prerequisites?: InputMaybe<Array<PrerequisiteInput>>;
  price: Scalars['Float']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  whatWillGain?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  courseId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  fileKey?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  lessonId: Scalars['String']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<LectureMetadataInput>;
  questions?: InputMaybe<Array<QuizQuestionInput>>;
  quizType?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  videoId?: InputMaybe<Scalars['String']['input']>;
  videoStreamUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateLessonInput = {
  courseId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateOrderInput = {
  courseId: Scalars['ID']['input'];
};

export type EnrollCourseInput = {
  courseId: Scalars['ID']['input'];
};

/** Type of entity that owns the file */
export enum EntityType {
  Course = 'COURSE',
  Lecture = 'LECTURE',
  Lesson = 'LESSON',
  User = 'USER'
}

export type Experience = {
  __typename?: 'Experience';
  company?: Maybe<Scalars['String']['output']>;
  current?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  startDate: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type ExperienceInput = {
  company?: InputMaybe<Scalars['String']['input']>;
  current?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

/** Purpose of the file */
export enum FilePurpose {
  CourseImage = 'COURSE_IMAGE',
  IntroVideo = 'INTRO_VIDEO',
  LectureFile = 'LECTURE_FILE',
  LectureVideo = 'LECTURE_VIDEO',
  Other = 'OTHER',
  ProfileImage = 'PROFILE_IMAGE',
  Thumbnail = 'THUMBNAIL'
}

export type FileReference = {
  __typename?: 'FileReference';
  _id: Scalars['ID']['output'];
  bunnyVideoId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  doSpacesKey?: Maybe<Scalars['String']['output']>;
  entityId: Scalars['ID']['output'];
  entityType: EntityType;
  fileType: FileType;
  id: Scalars['ID']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  originalFilename?: Maybe<Scalars['String']['output']>;
  purpose: FilePurpose;
  size?: Maybe<Scalars['Float']['output']>;
  status: FileStatus;
  storageProvider: StorageProvider;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

/** Status of the file */
export enum FileStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Deleted = 'DELETED'
}

/** Type of file */
export enum FileType {
  Audio = 'AUDIO',
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Other = 'OTHER',
  Video = 'VIDEO'
}

/** Types of filter attributes available for courses */
export enum FilterAttribute {
  Category = 'CATEGORY',
  Level = 'LEVEL',
  PriceRange = 'PRICE_RANGE',
  Rating = 'RATING'
}

export type FilterOption = {
  __typename?: 'FilterOption';
  count: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type Filters = {
  __typename?: 'Filters';
  categories?: Maybe<Array<FilterOption>>;
  levels?: Maybe<Array<FilterOption>>;
  priceRanges?: Maybe<Array<PriceRangeOption>>;
  ratings?: Maybe<Array<FilterOption>>;
};

export type FiltersInput = {
  attributes?: InputMaybe<Array<FilterAttribute>>;
  order?: InputMaybe<CourseCategoriesOrderInput>;
};

export type GoogleSignInInput = {
  idToken: Scalars['String']['input'];
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type InstructorAnalytics = {
  __typename?: 'InstructorAnalytics';
  averageRating?: Maybe<Scalars['Float']['output']>;
  instructorId: Scalars['ID']['output'];
  mostPerformingCourses: PerformingCourseConnection;
  mostPopularCourses: PopularCourseConnection;
  recentActivity: RecentActivityConnection;
  studentsGrowth: Array<StudentGrowthData>;
  totalCourseViews: Scalars['Int']['output'];
  totalCourses: Scalars['Int']['output'];
  totalPageViews: Scalars['Int']['output'];
  totalRevenue?: Maybe<Scalars['Float']['output']>;
  totalStudents: Scalars['Int']['output'];
};


export type InstructorAnalyticsMostPerformingCoursesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type InstructorAnalyticsMostPopularCoursesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type InstructorAnalyticsRecentActivityArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type InstructorAnalyticsStudentsGrowthArgs = {
  months?: InputMaybe<Scalars['Int']['input']>;
};

export type InstructorInfo = {
  __typename?: 'InstructorInfo';
  experience?: Maybe<Array<Experience>>;
  interests?: Maybe<Array<Scalars['String']['output']>>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  socialLinks?: Maybe<SocialLinks>;
  speaks?: Maybe<Array<LanguageInfo>>;
  teachesLanguages?: Maybe<Array<LanguageInfo>>;
};

export type InstructorInfoInput = {
  experience?: InputMaybe<Array<ExperienceInput>>;
  interests?: InputMaybe<Array<Scalars['String']['input']>>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  socialLinks?: InputMaybe<SocialLinksInput>;
  speaks?: InputMaybe<Array<LanguageInfoInput>>;
  teachesLanguages?: InputMaybe<Array<LanguageInfoInput>>;
};

export type InstructorInfoPublic = {
  __typename?: 'InstructorInfoPublic';
  experience?: Maybe<Array<Experience>>;
  interests?: Maybe<Array<Scalars['String']['output']>>;
  jobTitle?: Maybe<Scalars['String']['output']>;
  speaks?: Maybe<Array<LanguageInfo>>;
  teachesLanguages?: Maybe<Array<LanguageInfo>>;
};

export type InstructorPublic = {
  __typename?: 'InstructorPublic';
  bio?: Maybe<Scalars['String']['output']>;
  courses: CourseConnection;
  education?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  instructorInfo?: Maybe<InstructorInfoPublic>;
  lastName: Scalars['String']['output'];
  profilePicture?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};


export type InstructorPublicCoursesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Supported languages in the platform */
export enum Language {
  Arabic = 'ARABIC',
  Bengali = 'BENGALI',
  Chinese = 'CHINESE',
  Czech = 'CZECH',
  Danish = 'DANISH',
  Dutch = 'DUTCH',
  English = 'ENGLISH',
  Finnish = 'FINNISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Greek = 'GREEK',
  Hebrew = 'HEBREW',
  Hindi = 'HINDI',
  Hungarian = 'HUNGARIAN',
  Indonesian = 'INDONESIAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Malay = 'MALAY',
  Norwegian = 'NORWEGIAN',
  Other = 'OTHER',
  Persian = 'PERSIAN',
  Polish = 'POLISH',
  Portuguese = 'PORTUGUESE',
  Romanian = 'ROMANIAN',
  Russian = 'RUSSIAN',
  Spanish = 'SPANISH',
  Swahili = 'SWAHILI',
  Swedish = 'SWEDISH',
  Tagalog = 'TAGALOG',
  Thai = 'THAI',
  Turkish = 'TURKISH',
  Ukrainian = 'UKRAINIAN',
  Urdu = 'URDU',
  Vietnamese = 'VIETNAMESE'
}

export type LanguageInfo = {
  __typename?: 'LanguageInfo';
  isNative?: Maybe<Scalars['Boolean']['output']>;
  language: Scalars['String']['output'];
  score: Scalars['Float']['output'];
};

export type LanguageInfoInput = {
  isNative?: InputMaybe<Scalars['Boolean']['input']>;
  language: Scalars['String']['input'];
  score: Scalars['Float']['input'];
};

export type Lecture = {
  __typename?: 'Lecture';
  _id: Scalars['ID']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  fileKey?: Maybe<Scalars['String']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  lesson: Lesson;
  lessonId: Scalars['ID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<LectureMetadata>;
  questions?: Maybe<Array<QuizQuestion>>;
  quizType?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  videoId?: Maybe<Scalars['String']['output']>;
  videoStreamUrl?: Maybe<Scalars['String']['output']>;
};

export type LectureMetadata = {
  __typename?: 'LectureMetadata';
  duration: Scalars['Float']['output'];
};

export type LectureMetadataInput = {
  duration?: InputMaybe<Scalars['Float']['input']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  _id: Scalars['ID']['output'];
  course: Course;
  courseId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  lectures: Array<Lecture>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  archiveCourse: Course;
  cancelOrder: Order;
  changeCourseStatus: Course;
  changeMyPassword: MessageResponse;
  createCourse: Course;
  createLecture: Lecture;
  createLesson: Lesson;
  createOrder: Order;
  deleteCourse: Scalars['Boolean']['output'];
  deleteFile: Scalars['Boolean']['output'];
  deleteFileReference: Scalars['Boolean']['output'];
  deleteLecture: Scalars['Boolean']['output'];
  deleteLesson: Scalars['Boolean']['output'];
  deleteVideo: Scalars['Boolean']['output'];
  enrollCourse: UserCourse;
  forgetPassword: MessageResponse;
  getBunnyStreamUploadUrl: BunnyStreamUploadUrlResponse;
  getUploadSignedUrl: UploadSignedUrlResponse;
  getVideoUploadUrl: VideoUploadUrlResponse;
  googleSignIn: AuthResponse;
  joinAsInstructor: User;
  login: AuthResponse;
  logout: MessageResponse;
  markFileReferenceAsArchived: Scalars['Boolean']['output'];
  markFileReferenceAsDeleted: Scalars['Boolean']['output'];
  /** @deprecated Use Bunny Stream for video uploads. This mutation will be removed. */
  processVideo: ProcessVideoResponse;
  publishCourse: Course;
  refreshToken: AuthResponse;
  resetPassword: MessageResponse;
  sendVerificationEmail: MessageResponse;
  signup: User;
  toggleFavoriteCourse: UserCourse;
  toggleWishlistCourse: UserCourse;
  unarchiveCourse: Course;
  updateCourse: Course;
  updateCourseProgress: UserCourse;
  updateInstructorInfo: User;
  updateLecture: Lecture;
  /** @deprecated Use updateLecture mutation with videoId instead. videoStreamUrl is set automatically. */
  updateLectureVideoStreamUrl: Scalars['Boolean']['output'];
  updateLesson: Lesson;
  updateUser: User;
  updateUserRoles: User;
  verifyEmail: MessageResponse;
};


export type MutationArchiveCourseArgs = {
  id: Scalars['ID']['input'];
  input: ArchiveCourseInput;
};


export type MutationCancelOrderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChangeCourseStatusArgs = {
  id: Scalars['ID']['input'];
  input: ChangeCourseStatusInput;
};


export type MutationChangeMyPasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationCreateLectureArgs = {
  input: CreateLectureInput;
};


export type MutationCreateLessonArgs = {
  input: CreateLessonInput;
};


export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationDeleteCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFileArgs = {
  key: Scalars['String']['input'];
};


export type MutationDeleteFileReferenceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLectureArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLessonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteVideoArgs = {
  m3u8Key: Scalars['String']['input'];
};


export type MutationEnrollCourseArgs = {
  input: EnrollCourseInput;
};


export type MutationForgetPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationGetBunnyStreamUploadUrlArgs = {
  collectionId?: InputMaybe<Scalars['String']['input']>;
  expirationMinutes?: InputMaybe<Scalars['Float']['input']>;
  filename: Scalars['String']['input'];
  lessonId: Scalars['String']['input'];
};


export type MutationGetUploadSignedUrlArgs = {
  expiresIn?: InputMaybe<Scalars['Float']['input']>;
  filename: Scalars['String']['input'];
  folder?: InputMaybe<Scalars['String']['input']>;
  mimetype: Scalars['String']['input'];
};


export type MutationGetVideoUploadUrlArgs = {
  filename: Scalars['String']['input'];
  lessonId: Scalars['String']['input'];
};


export type MutationGoogleSignInArgs = {
  input: GoogleSignInInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationMarkFileReferenceAsArchivedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMarkFileReferenceAsDeletedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationProcessVideoArgs = {
  lectureId: Scalars['ID']['input'];
  lessonId: Scalars['String']['input'];
  mp4Key: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
};


export type MutationPublishCourseArgs = {
  id: Scalars['ID']['input'];
  input: PublishCourseInput;
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  oldPassword?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
};


export type MutationSendVerificationEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationToggleFavoriteCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type MutationToggleWishlistCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type MutationUnarchiveCourseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateCourseArgs = {
  id: Scalars['ID']['input'];
  input: UpdateCourseInput;
};


export type MutationUpdateCourseProgressArgs = {
  input: UpdateProgressInput;
};


export type MutationUpdateInstructorInfoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: UpdateInstructorInfoInput;
};


export type MutationUpdateLectureArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLectureInput;
};


export type MutationUpdateLectureVideoStreamUrlArgs = {
  format?: InputMaybe<Scalars['String']['input']>;
  lectureId: Scalars['ID']['input'];
  videoId: Scalars['String']['input'];
};


export type MutationUpdateLessonArgs = {
  id: Scalars['ID']['input'];
  input: UpdateLessonInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
};


export type MutationUpdateUserRolesArgs = {
  id: Scalars['ID']['input'];
  input: UpdateRolesInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type MyCoursesFilterInput = {
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<CourseStatus>>;
};

export type Order = {
  __typename?: 'Order';
  _id: Scalars['ID']['output'];
  course: Course;
  courseId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  finalPrice: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  orderNumber: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  status: OrderStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

/** Order direction (ASC or DESC) */
export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Status of the order */
export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Pending = 'PENDING'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PerformingCourse = {
  __typename?: 'PerformingCourse';
  course: Course;
  enrollmentCount: Scalars['Int']['output'];
  performanceScore: Scalars['Int']['output'];
  viewCount: Scalars['Int']['output'];
};

export type PerformingCourseConnection = {
  __typename?: 'PerformingCourseConnection';
  edges: Array<PerformingCourseEdge>;
  nodes: Array<PerformingCourse>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PerformingCourseEdge = {
  __typename?: 'PerformingCourseEdge';
  cursor: Scalars['String']['output'];
  node: PerformingCourse;
};

export type PopularCourse = {
  __typename?: 'PopularCourse';
  course: Course;
  enrollmentCount: Scalars['Int']['output'];
  popularityScore: Scalars['Int']['output'];
  viewCount: Scalars['Int']['output'];
};

export type PopularCourseConnection = {
  __typename?: 'PopularCourseConnection';
  edges: Array<PopularCourseEdge>;
  nodes: Array<PopularCourse>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PopularCourseEdge = {
  __typename?: 'PopularCourseEdge';
  cursor: Scalars['String']['output'];
  node: PopularCourse;
};

export type Prerequisite = {
  __typename?: 'Prerequisite';
  description?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type PrerequisiteInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type PriceRangeOption = {
  __typename?: 'PriceRangeOption';
  count: Scalars['Int']['output'];
  max: Scalars['Float']['output'];
  min: Scalars['Float']['output'];
};

export type ProcessVideoResponse = {
  __typename?: 'ProcessVideoResponse';
  masterPlaylistKey: Scalars['String']['output'];
  processingComplete: Scalars['Boolean']['output'];
  variants: Array<QualityVariant>;
  videoId: Scalars['String']['output'];
  videoStreamUrl: Scalars['String']['output'];
};

export type PublicLecture = {
  __typename?: 'PublicLecture';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  metadata?: Maybe<LectureMetadata>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type PublicLesson = {
  __typename?: 'PublicLesson';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  lectureCount: Scalars['Int']['output'];
  lectures?: Maybe<Array<PublicLecture>>;
  title: Scalars['String']['output'];
};

export type PublishCourseInput = {
  publishDate?: InputMaybe<Scalars['String']['input']>;
};

export type QualityVariant = {
  __typename?: 'QualityVariant';
  bandwidth: Scalars['Float']['output'];
  playlistKey: Scalars['String']['output'];
  quality: Scalars['String']['output'];
  resolution: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  bestSellingCourses: CourseConnection;
  courseAnalytics: CourseAnalytics;
  courseBySlug: Course;
  courseCategories: CourseCategories;
  courses: CourseConnection;
  entityFiles: Array<FileReference>;
  fileReference: FileReference;
  fileReferenceByBunnyVideoId?: Maybe<FileReference>;
  fileReferenceByDoSpacesKey?: Maybe<FileReference>;
  fileReferences: Array<FileReference>;
  fileReferencesByPurpose: Array<FileReference>;
  filters: Filters;
  getMyCourseLessons: Array<Lesson>;
  getMyUserInfo: User;
  getSignedUrl: SignedUrlResponse;
  hasPurchasedCourse: Scalars['Boolean']['output'];
  instructorAnalytics: InstructorAnalytics;
  instructorBySlug: InstructorPublic;
  instructorInfo?: Maybe<InstructorInfo>;
  isCourseFavorite: Scalars['Boolean']['output'];
  isCourseInWishlist: Scalars['Boolean']['output'];
  isEnrolledInCourse: Scalars['Boolean']['output'];
  languages: Array<Scalars['String']['output']>;
  learnCourse: Course;
  lecture: Lecture;
  lectures: Array<Lecture>;
  lecturesByLesson: Array<Lecture>;
  lecturesByLessonForLearning: Array<Lecture>;
  lesson: Lesson;
  lessons: Array<Lesson>;
  lessonsByCourse: Array<Lesson>;
  myCourse: Course;
  myCourses: CourseConnection;
  myEnrolledCourses: Array<UserCourse>;
  myFavoriteCourses: Array<UserCourse>;
  myOrders: Array<Order>;
  myWishlistCourses: Array<UserCourse>;
  order: Order;
  orderByOrderNumber: Order;
  searchSuggestions: Array<SearchSuggestion>;
  topInstructors: Array<InstructorPublic>;
  user: User;
  userCourse?: Maybe<UserCourse>;
  users: Array<User>;
  verifyForgetPasswordToken: VerifyTokenResponse;
};


export type QueryBestSellingCoursesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCourseAnalyticsArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryCourseBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCourseCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CourseCategoriesOrderInput>;
};


export type QueryCoursesArgs = {
  filter?: InputMaybe<CourseFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CourseSortInput>;
};


export type QueryEntityFilesArgs = {
  entityId: Scalars['ID']['input'];
  entityType: EntityType;
  fileType?: InputMaybe<FileType>;
  purpose?: InputMaybe<FilePurpose>;
  status?: InputMaybe<FileStatus>;
  storageProvider?: InputMaybe<StorageProvider>;
};


export type QueryFileReferenceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFileReferenceByBunnyVideoIdArgs = {
  bunnyVideoId: Scalars['String']['input'];
};


export type QueryFileReferenceByDoSpacesKeyArgs = {
  doSpacesKey: Scalars['String']['input'];
};


export type QueryFileReferencesArgs = {
  entityId: Scalars['ID']['input'];
  entityType: EntityType;
  status?: InputMaybe<FileStatus>;
};


export type QueryFileReferencesByPurposeArgs = {
  entityId: Scalars['ID']['input'];
  entityType: EntityType;
  purpose: FilePurpose;
  status?: InputMaybe<FileStatus>;
};


export type QueryFiltersArgs = {
  input?: InputMaybe<FiltersInput>;
};


export type QueryGetMyCourseLessonsArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryGetSignedUrlArgs = {
  expiresIn?: InputMaybe<Scalars['Float']['input']>;
  key: Scalars['String']['input'];
};


export type QueryHasPurchasedCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryInstructorAnalyticsArgs = {
  instructorId?: InputMaybe<Scalars['ID']['input']>;
  instructorSlug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInstructorBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryInstructorInfoArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryIsCourseFavoriteArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryIsCourseInWishlistArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryIsEnrolledInCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryLearnCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryLectureArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLecturesByLessonArgs = {
  lessonId: Scalars['ID']['input'];
};


export type QueryLecturesByLessonForLearningArgs = {
  lessonId: Scalars['ID']['input'];
};


export type QueryLessonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLessonsByCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryMyCourseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMyCoursesArgs = {
  filter?: InputMaybe<MyCoursesFilterInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<CourseSortInput>;
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrderByOrderNumberArgs = {
  orderNumber: Scalars['String']['input'];
};


export type QuerySearchSuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  searchTerm: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserCourseArgs = {
  courseId: Scalars['ID']['input'];
};


export type QueryVerifyForgetPasswordTokenArgs = {
  token: Scalars['String']['input'];
};

export type QuizOption = {
  __typename?: 'QuizOption';
  index: Scalars['Float']['output'];
  text: Scalars['String']['output'];
};

export type QuizOptionInput = {
  index: Scalars['Float']['input'];
  text: Scalars['String']['input'];
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  audioUrl?: Maybe<Scalars['String']['output']>;
  correctAnswers: Array<Scalars['Float']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  options: Array<QuizOption>;
  question?: Maybe<Scalars['String']['output']>;
  questionType: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type QuizQuestionInput = {
  audioUrl?: InputMaybe<Scalars['String']['input']>;
  correctAnswers: Array<Scalars['Float']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  options: Array<QuizOptionInput>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionType: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type RecentActivity = {
  __typename?: 'RecentActivity';
  course?: Maybe<CourseInfo>;
  courseId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  type: AnalyticsEventType;
  user?: Maybe<UserInfo>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RecentActivityConnection = {
  __typename?: 'RecentActivityConnection';
  edges: Array<RecentActivityEdge>;
  nodes: Array<RecentActivity>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type RecentActivityEdge = {
  __typename?: 'RecentActivityEdge';
  cursor: Scalars['String']['output'];
  node: RecentActivity;
};

export type SearchSuggestion = {
  __typename?: 'SearchSuggestion';
  id: Scalars['String']['output'];
  score?: Maybe<Scalars['Float']['output']>;
  text: Scalars['String']['output'];
};

export type SignedUrlResponse = {
  __typename?: 'SignedUrlResponse';
  expiresIn: Scalars['Int']['output'];
  url: Scalars['String']['output'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  facebook?: Maybe<Scalars['String']['output']>;
  instagram?: Maybe<Scalars['String']['output']>;
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type SocialLinksInput = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  website?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

/** Storage provider used for the file */
export enum StorageProvider {
  BunnyStream = 'BUNNY_STREAM',
  DigitalOcean = 'DIGITAL_OCEAN'
}

export type StudentGrowthData = {
  __typename?: 'StudentGrowthData';
  enrollments: Scalars['Int']['output'];
  growthRate?: Maybe<Scalars['Float']['output']>;
  month: Scalars['String']['output'];
  students: Scalars['Int']['output'];
};

export type UpdateCourseInput = {
  courseInformations?: InputMaybe<Array<Scalars['String']['input']>>;
  courseLevel?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  discountExpiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  introFilename?: InputMaybe<Scalars['String']['input']>;
  introKey?: InputMaybe<Scalars['String']['input']>;
  introUrl?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  objectives?: InputMaybe<Array<Scalars['String']['input']>>;
  prerequisites?: InputMaybe<Array<PrerequisiteInput>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  whatWillGain?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateInstructorInfoInput = {
  instructorInfo?: InputMaybe<InstructorInfoInput>;
};

export type UpdateLectureInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileKey?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<LectureMetadataInput>;
  questions?: InputMaybe<Array<QuizQuestionInput>>;
  quizType?: InputMaybe<Scalars['String']['input']>;
  thumbnailUrl?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  videoId?: InputMaybe<Scalars['String']['input']>;
  videoStreamUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLessonInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProgressInput = {
  courseId: Scalars['ID']['input'];
  lastAccessedLectureId?: InputMaybe<Scalars['ID']['input']>;
  lastAccessedLessonId?: InputMaybe<Scalars['ID']['input']>;
  lectureId?: InputMaybe<Scalars['ID']['input']>;
  lessonId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateRolesInput = {
  roles: Array<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  addresses?: InputMaybe<Array<AddressInput>>;
  age?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  education?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  instructorInfo?: InputMaybe<InstructorInfoInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UploadSignedUrlResponse = {
  __typename?: 'UploadSignedUrlResponse';
  expiresIn: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  addresses?: Maybe<Array<Address>>;
  age?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  education?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  gender?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  instructorInfo?: Maybe<InstructorInfo>;
  isProfileComplete: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  profilePicture?: Maybe<Scalars['String']['output']>;
  registrationStrategy: Scalars['String']['output'];
  roles: Array<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCourse = {
  __typename?: 'UserCourse';
  _id: Scalars['ID']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  completedLectureIds: Array<Scalars['String']['output']>;
  completedLessonIds: Array<Scalars['String']['output']>;
  course: Course;
  courseId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isEnrolled: Scalars['Boolean']['output'];
  isFavorite: Scalars['Boolean']['output'];
  isWishlist: Scalars['Boolean']['output'];
  lastAccessedLectureId?: Maybe<Scalars['String']['output']>;
  lastAccessedLessonId?: Maybe<Scalars['String']['output']>;
  progressPercentage: Scalars['Float']['output'];
  startedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  avatar?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  email?: Maybe<Scalars['String']['output']>;
  valid: Scalars['Boolean']['output'];
};

export type VideoUploadUrlResponse = {
  __typename?: 'VideoUploadUrlResponse';
  key: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
  videoId: Scalars['String']['output'];
};

export type BestSellingCoursesQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;


export type BestSellingCoursesQuery = { __typename?: 'Query', bestSellingCourses: { __typename?: 'CourseConnection', totalCount: number, edges: Array<{ __typename?: 'CourseEdge', cursor: string, node: { __typename?: 'Course', _id: string, approvedDate?: string | null, archivedDate?: string | null, courseInformations?: Array<string> | null, courseLevel: string, createdAt: string, deletedAt?: string | null, description?: string | null, discount?: number | null, discountExpiresAt?: string | null, enrollmentCount: number, id: string, image?: string | null, introFilename?: string | null, introKey?: string | null, introUrl?: string | null, isApproved: boolean, isEnrolled?: boolean | null, isFavorite?: boolean | null, isOwner?: boolean | null, isWishlist?: boolean | null, language?: string | null, objectives?: Array<string> | null, price: number, publishDate?: string | null, salePrice: number, salesCount: number, slug: string, status: string, title: string, updatedAt: string, viewCount: number, whatWillGain?: Array<string> | null } }>, facts: { __typename?: 'Filters', categories?: Array<{ __typename?: 'FilterOption', count: number, value: string }> | null, levels?: Array<{ __typename?: 'FilterOption', count: number, value: string }> | null, priceRanges?: Array<{ __typename?: 'PriceRangeOption', count: number, max: number, min: number }> | null, ratings?: Array<{ __typename?: 'FilterOption', count: number, value: string }> | null }, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null }, nodes: Array<{ __typename?: 'Course', _id: string, approvedDate?: string | null, archivedDate?: string | null, courseInformations?: Array<string> | null, courseLevel: string, createdAt: string, deletedAt?: string | null, description?: string | null, discount?: number | null, discountExpiresAt?: string | null, enrollmentCount: number, id: string, image?: string | null, introFilename?: string | null, introKey?: string | null, introUrl?: string | null, isApproved: boolean, isEnrolled?: boolean | null, isFavorite?: boolean | null, isOwner?: boolean | null, isWishlist?: boolean | null, language?: string | null, objectives?: Array<string> | null, price: number, publishDate?: string | null, salePrice: number, salesCount: number, slug: string, status: string, title: string, updatedAt: string, viewCount: number, whatWillGain?: Array<string> | null }> } };

export type ChangeCourseStatusMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: ChangeCourseStatusInput;
}>;


export type ChangeCourseStatusMutation = { __typename?: 'Mutation', changeCourseStatus: { __typename?: 'Course', id: string, title: string, status: string, publishDate?: string | null } };

export type ChangeMyPasswordMutationVariables = Exact<{
  input: ChangePasswordInput;
}>;


export type ChangeMyPasswordMutation = { __typename?: 'Mutation', changeMyPassword: { __typename?: 'MessageResponse', message: string } };

export type CreateCourseMutationVariables = Exact<{
  input: CreateCourseInput;
}>;


export type CreateCourseMutation = { __typename?: 'Mutation', createCourse: { __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, courseInformations?: Array<string> | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, image?: string | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null } } };

export type CreateLectureMutationVariables = Exact<{
  input: CreateLectureInput;
}>;


export type CreateLectureMutation = { __typename?: 'Mutation', createLecture: { __typename?: 'Lecture', id: string, type: string, title: string, description: string, content?: string | null, link?: string | null, filename?: string | null, fileKey?: string | null, videoId?: string | null, videoStreamUrl?: string | null, thumbnailUrl?: string | null, quizType?: string | null, status?: string | null, lessonId: string, createdAt: string, updatedAt: string, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null } };

export type CreateLessonMutationVariables = Exact<{
  input: CreateLessonInput;
}>;


export type CreateLessonMutation = { __typename?: 'Mutation', createLesson: { __typename?: 'Lesson', id: string, title: string, description?: string | null, courseId: string, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string } } };

export type DeleteCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteCourseMutation = { __typename?: 'Mutation', deleteCourse: boolean };

export type DeleteFileMutationVariables = Exact<{
  key: Scalars['String']['input'];
}>;


export type DeleteFileMutation = { __typename?: 'Mutation', deleteFile: boolean };

export type DeleteLectureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLectureMutation = { __typename?: 'Mutation', deleteLecture: boolean };

export type DeleteLessonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteLessonMutation = { __typename?: 'Mutation', deleteLesson: boolean };

export type DeleteVideoMutationVariables = Exact<{
  m3u8Key: Scalars['String']['input'];
}>;


export type DeleteVideoMutation = { __typename?: 'Mutation', deleteVideo: boolean };

export type EnrollCourseMutationVariables = Exact<{
  input: EnrollCourseInput;
}>;


export type EnrollCourseMutation = { __typename?: 'Mutation', enrollCourse: { __typename?: 'UserCourse', id: string, courseId: string, userId: string, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string, slug: string } } };

export type ForgetPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgetPasswordMutation = { __typename?: 'Mutation', forgetPassword: { __typename?: 'MessageResponse', message: string } };

export type GetBunnyStreamUploadUrlMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  lessonId: Scalars['String']['input'];
}>;


export type GetBunnyStreamUploadUrlMutation = { __typename?: 'Mutation', getBunnyStreamUploadUrl: { __typename?: 'BunnyStreamUploadUrlResponse', uploadUrl: string, videoId: string, libraryId: string, authorizationSignature: string, authorizationExpire: number, title?: string | null } };

export type GetUploadSignedUrlMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  mimetype: Scalars['String']['input'];
  folder?: InputMaybe<Scalars['String']['input']>;
  expiresIn?: InputMaybe<Scalars['Float']['input']>;
}>;


export type GetUploadSignedUrlMutation = { __typename?: 'Mutation', getUploadSignedUrl: { __typename?: 'UploadSignedUrlResponse', uploadUrl: string, key: string, expiresIn: number } };

export type GetVideoUploadUrlMutationVariables = Exact<{
  filename: Scalars['String']['input'];
  lessonId: Scalars['String']['input'];
}>;


export type GetVideoUploadUrlMutation = { __typename?: 'Mutation', getVideoUploadUrl: { __typename?: 'VideoUploadUrlResponse', uploadUrl: string, key: string, videoId: string } };

export type GoogleSignInMutationVariables = Exact<{
  input: GoogleSignInInput;
}>;


export type GoogleSignInMutation = { __typename?: 'Mutation', googleSignIn: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, roles: Array<string>, isVerified: boolean, createdAt: string } } };

export type JoinAsInstructorMutationVariables = Exact<{ [key: string]: never; }>;


export type JoinAsInstructorMutation = { __typename?: 'Mutation', joinAsInstructor: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, roles: Array<string>, instructorInfo?: { __typename?: 'InstructorInfo', jobTitle?: string | null, interests?: Array<string> | null, socialLinks?: { __typename?: 'SocialLinks', website?: string | null, facebook?: string | null, twitter?: string | null, youtube?: string | null, instagram?: string | null, whatsapp?: string | null } | null, experience?: Array<{ __typename?: 'Experience', title: string, company?: string | null, description?: string | null, startDate: string, endDate?: string | null, current?: boolean | null }> | null, teachesLanguages?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null, speaks?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null } | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, roles: Array<string>, isVerified: boolean, createdAt: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'MessageResponse', message: string } };

export type ProcessVideoMutationVariables = Exact<{
  lectureId: Scalars['ID']['input'];
  lessonId: Scalars['String']['input'];
  mp4Key: Scalars['String']['input'];
  videoId: Scalars['String']['input'];
}>;


export type ProcessVideoMutation = { __typename?: 'Mutation', processVideo: { __typename?: 'ProcessVideoResponse', masterPlaylistKey: string, videoStreamUrl: string, videoId: string, processingComplete: boolean, variants: Array<{ __typename?: 'QualityVariant', quality: string, resolution: string, bandwidth: number, playlistKey: string }> } };

export type PublishCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: PublishCourseInput;
}>;


export type PublishCourseMutation = { __typename?: 'Mutation', publishCourse: { __typename?: 'Course', id: string, title: string, status: string, publishDate?: string | null } };

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = { __typename?: 'Mutation', refreshToken: { __typename?: 'AuthResponse', accessToken: string, user: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, roles: Array<string>, isVerified: boolean, createdAt: string } } };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
  oldPassword?: InputMaybe<Scalars['String']['input']>;
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: { __typename?: 'MessageResponse', message: string } };

export type SendVerificationEmailMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendVerificationEmailMutation = { __typename?: 'Mutation', sendVerificationEmail: { __typename?: 'MessageResponse', message: string } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, roles: Array<string>, isVerified: boolean, createdAt: string } };

export type ToggleFavoriteCourseMutationVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type ToggleFavoriteCourseMutation = { __typename?: 'Mutation', toggleFavoriteCourse: { __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, course: { __typename?: 'Course', id: string, title: string, slug: string } } };

export type ToggleWishlistCourseMutationVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type ToggleWishlistCourseMutation = { __typename?: 'Mutation', toggleWishlistCourse: { __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, course: { __typename?: 'Course', id: string, title: string, slug: string } } };

export type UpdateCourseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateCourseInput;
}>;


export type UpdateCourseMutation = { __typename?: 'Mutation', updateCourse: { __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, courseInformations?: Array<string> | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, image?: string | null, introUrl?: string | null, introKey?: string | null, introFilename?: string | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null } } };

export type UpdateInstructorInfoMutationVariables = Exact<{
  input: UpdateInstructorInfoInput;
}>;


export type UpdateInstructorInfoMutation = { __typename?: 'Mutation', updateInstructorInfo: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, age?: string | null, createdAt: string, gender?: string | null, isVerified: boolean, education?: string | null, profilePicture?: string | null, roles: Array<string>, phone?: string | null, updatedAt: string, bio?: string | null, instructorInfo?: { __typename?: 'InstructorInfo', jobTitle?: string | null, interests?: Array<string> | null, socialLinks?: { __typename?: 'SocialLinks', website?: string | null, facebook?: string | null, twitter?: string | null, youtube?: string | null, instagram?: string | null, whatsapp?: string | null } | null, experience?: Array<{ __typename?: 'Experience', title: string, company?: string | null, description?: string | null, startDate: string, endDate?: string | null, current?: boolean | null }> | null, teachesLanguages?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null, speaks?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null } | null } };

export type UpdateLectureMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateLectureInput;
}>;


export type UpdateLectureMutation = { __typename?: 'Mutation', updateLecture: { __typename?: 'Lecture', id: string, type: string, title: string, description: string, content?: string | null, link?: string | null, filename?: string | null, fileKey?: string | null, videoId?: string | null, videoStreamUrl?: string | null, thumbnailUrl?: string | null, quizType?: string | null, status?: string | null, updatedAt: string, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null } };

export type UpdateLessonMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateLessonInput;
}>;


export type UpdateLessonMutation = { __typename?: 'Mutation', updateLesson: { __typename?: 'Lesson', id: string, title: string, description?: string | null, updatedAt: string } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', age?: string | null, bio?: string | null, createdAt: string, deletedAt?: string | null, education?: string | null, email: string, firstName: string, gender?: string | null, id: string, isProfileComplete: boolean, isVerified: boolean, phone?: string | null, profilePicture?: string | null, registrationStrategy: string, updatedAt: string, lastName: string } };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail: { __typename?: 'MessageResponse', message: string } };

export type CourseBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CourseBySlugQuery = { __typename?: 'Query', courseBySlug: { __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, courseInformations?: Array<string> | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, slug: string, image?: string | null, introUrl?: string | null, introKey?: string | null, introFilename?: string | null, isWishlist?: boolean | null, isFavorite?: boolean | null, isEnrolled?: boolean | null, isOwner?: boolean | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null, courses: { __typename?: 'CourseConnection', totalCount: number } }, lessons: Array<{ __typename?: 'PublicLesson', id: string, title: string, description?: string | null, lectures?: Array<{ __typename?: 'PublicLecture', id: string, title: string, type: string, description: string, thumbnailUrl?: string | null, metadata?: { __typename?: 'LectureMetadata', duration: number } | null }> | null }> } };

export type CourseCategoriesQueryVariables = Exact<{
  order?: InputMaybe<CourseCategoriesOrderInput>;
}>;


export type CourseCategoriesQuery = { __typename?: 'Query', courseCategories: { __typename?: 'CourseCategories', languages: Array<{ __typename?: 'CategoryItem', value: string, count: number }>, levels: Array<{ __typename?: 'CategoryItem', value: string, count: number }> } };

export type GetCoursesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<CourseFilterInput>;
  sort?: InputMaybe<CourseSortInput>;
}>;


export type GetCoursesQuery = { __typename?: 'Query', courses: { __typename?: 'CourseConnection', totalCount: number, nodes: Array<{ __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, slug: string, image?: string | null, introUrl?: string | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, enrollmentCount: number, viewCount: number, createdAt: string, updatedAt: string, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null }, lessons: Array<{ __typename?: 'PublicLesson', id: string, title: string, lectures?: Array<{ __typename?: 'PublicLecture', id: string, type: string, metadata?: { __typename?: 'LectureMetadata', duration: number } | null }> | null }> }>, facts: { __typename?: 'Filters', categories?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null, levels?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null, priceRanges?: Array<{ __typename?: 'PriceRangeOption', min: number, max: number, count: number }> | null, ratings?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null }, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } };

export type FiltersQueryVariables = Exact<{
  input?: InputMaybe<FiltersInput>;
}>;


export type FiltersQuery = { __typename?: 'Query', filters: { __typename?: 'Filters', categories?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null, levels?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null, priceRanges?: Array<{ __typename?: 'PriceRangeOption', min: number, max: number, count: number }> | null, ratings?: Array<{ __typename?: 'FilterOption', value: string, count: number }> | null } };

export type GetCourseAnalyticsQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GetCourseAnalyticsQuery = { __typename?: 'Query', courseAnalytics: { __typename?: 'CourseAnalytics', courseId: string, totalStudents: number, totalViews: number, completionRate?: number | null, recentActivity: { __typename?: 'RecentActivityConnection', totalCount: number, edges: Array<{ __typename?: 'RecentActivityEdge', node: { __typename?: 'RecentActivity', type: AnalyticsEventType, description: string, createdAt: string, userId?: string | null, courseId?: string | null, user?: { __typename?: 'UserInfo', firstName?: string | null, lastName?: string | null } | null, course?: { __typename?: 'CourseInfo', title?: string | null } | null } }>, nodes: Array<{ __typename?: 'RecentActivity', type: AnalyticsEventType, description: string, createdAt: string, userId?: string | null, courseId?: string | null, user?: { __typename?: 'UserInfo', firstName?: string | null, lastName?: string | null } | null, course?: { __typename?: 'CourseInfo', title?: string | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } } };

export type GetInstructorAnalyticsQueryVariables = Exact<{
  instructorSlug: Scalars['String']['input'];
}>;


export type GetInstructorAnalyticsQuery = { __typename?: 'Query', instructorAnalytics: { __typename?: 'InstructorAnalytics', instructorId: string, mostPopularCourses: { __typename?: 'PopularCourseConnection', totalCount: number, nodes: Array<{ __typename?: 'PopularCourse', enrollmentCount: number, viewCount: number, popularityScore: number, course: { __typename?: 'Course', id: string, title: string, description?: string | null, slug: string, price: number, image?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } }, mostPerformingCourses: { __typename?: 'PerformingCourseConnection', totalCount: number, nodes: Array<{ __typename?: 'PerformingCourse', enrollmentCount: number, viewCount: number, performanceScore: number, course: { __typename?: 'Course', id: string, title: string, description?: string | null, slug: string, price: number, image?: string | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } } };

export type GetInstructorInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetInstructorInfoQuery = { __typename?: 'Query', instructorInfo?: { __typename?: 'InstructorInfo', jobTitle?: string | null, interests?: Array<string> | null, experience?: Array<{ __typename?: 'Experience', title: string, company?: string | null, description?: string | null, startDate: string, endDate?: string | null, current?: boolean | null }> | null, teachesLanguages?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null, speaks?: Array<{ __typename?: 'LanguageInfo', language: string, isNative?: boolean | null, score: number }> | null } | null };

export type GetInstructorRecentActivityQueryVariables = Exact<{
  instructorId?: InputMaybe<Scalars['ID']['input']>;
  instructorSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetInstructorRecentActivityQuery = { __typename?: 'Query', instructorAnalytics: { __typename?: 'InstructorAnalytics', recentActivity: { __typename?: 'RecentActivityConnection', totalCount: number, nodes: Array<{ __typename?: 'RecentActivity', type: AnalyticsEventType, description: string, courseId?: string | null, userId?: string | null, createdAt: string, user?: { __typename?: 'UserInfo', firstName?: string | null, lastName?: string | null } | null, course?: { __typename?: 'CourseInfo', title?: string | null } | null }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } } };

export type GetInstructorStatisticsQueryVariables = Exact<{
  instructorId?: InputMaybe<Scalars['ID']['input']>;
  instructorSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetInstructorStatisticsQuery = { __typename?: 'Query', instructorAnalytics: { __typename?: 'InstructorAnalytics', totalCourses: number, totalStudents: number, totalPageViews: number, totalCourseViews: number } };

export type GetInstructorStudentsGrowthQueryVariables = Exact<{
  instructorId?: InputMaybe<Scalars['ID']['input']>;
  instructorSlug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetInstructorStudentsGrowthQuery = { __typename?: 'Query', instructorAnalytics: { __typename?: 'InstructorAnalytics', studentsGrowth: Array<{ __typename?: 'StudentGrowthData', month: string, students: number, enrollments: number, growthRate?: number | null }> } };

export type GetLanguagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguagesQuery = { __typename?: 'Query', languages: Array<string> };

export type GetMyCourseLessonsQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type GetMyCourseLessonsQuery = { __typename?: 'Query', getMyCourseLessons: Array<{ __typename?: 'Lesson', id: string, title: string, description?: string | null, courseId: string, lectures: Array<{ __typename?: 'Lecture', id: string, title: string, description: string, type: string, videoStreamUrl?: string | null, videoId?: string | null, fileKey?: string | null, filename?: string | null, content?: string | null, status?: string | null, link?: string | null, thumbnailUrl?: string | null, quizType?: string | null, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null }> }> };

export type GetMyUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyUserInfoQuery = { __typename?: 'Query', getMyUserInfo: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string, age?: string | null, bio?: string | null, createdAt: string, gender?: string | null, isVerified: boolean, education?: string | null, profilePicture?: string | null, roles: Array<string>, phone?: string | null, updatedAt: string } };

export type InstructorBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type InstructorBySlugQuery = { __typename?: 'Query', instructorBySlug: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null, interests?: Array<string> | null, experience?: Array<{ __typename?: 'Experience', title: string, company?: string | null, description?: string | null, startDate: string, endDate?: string | null, current?: boolean | null }> | null, speaks?: Array<{ __typename?: 'LanguageInfo', language: string, score: number, isNative?: boolean | null }> | null, teachesLanguages?: Array<{ __typename?: 'LanguageInfo', language: string, score: number, isNative?: boolean | null }> | null } | null, courses: { __typename?: 'CourseConnection', totalCount: number, nodes: Array<{ __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, price: number, salePrice: number, discount?: number | null, image?: string | null, status: string, slug: string, lessons: Array<{ __typename?: 'PublicLesson', id: string }> }> } } };

export type LearnCourseQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type LearnCourseQuery = { __typename?: 'Query', learnCourse: { __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, courseInformations?: Array<string> | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, slug: string, image?: string | null, introUrl?: string | null, introKey?: string | null, introFilename?: string | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null, courses: { __typename?: 'CourseConnection', totalCount: number } }, lessonsForLearning?: Array<{ __typename?: 'Lesson', id: string, title: string, description?: string | null, createdAt: string, updatedAt: string }> | null } };

export type LectureQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LectureQuery = { __typename?: 'Query', lecture: { __typename?: 'Lecture', id: string, type: string, title: string, description: string, content?: string | null, link?: string | null, filename?: string | null, fileKey?: string | null, videoId?: string | null, videoStreamUrl?: string | null, quizType?: string | null, status?: string | null, thumbnailUrl?: string | null, createdAt: string, updatedAt: string, metadata?: { __typename?: 'LectureMetadata', duration: number } | null, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null, lesson: { __typename?: 'Lesson', id: string, title: string, course: { __typename?: 'Course', id: string, title: string } } } };

export type LecturesByLessonForLearningQueryVariables = Exact<{
  lessonId: Scalars['ID']['input'];
}>;


export type LecturesByLessonForLearningQuery = { __typename?: 'Query', lecturesByLessonForLearning: Array<{ __typename?: 'Lecture', id: string, title: string, description: string, type: string, content?: string | null, link?: string | null, filename?: string | null, fileKey?: string | null, videoId?: string | null, videoStreamUrl?: string | null, thumbnailUrl?: string | null, quizType?: string | null, status?: string | null, createdAt: string, updatedAt: string, metadata?: { __typename?: 'LectureMetadata', duration: number } | null, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null }> };

export type LessonQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type LessonQuery = { __typename?: 'Query', lesson: { __typename?: 'Lesson', id: string, title: string, description?: string | null, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string }, lectures: Array<{ __typename?: 'Lecture', id: string, type: string, title: string, description: string, content?: string | null, link?: string | null, filename?: string | null, fileKey?: string | null, videoId?: string | null, videoStreamUrl?: string | null, thumbnailUrl?: string | null, quizType?: string | null, status?: string | null, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null }> } };

export type LessonsByCourseQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type LessonsByCourseQuery = { __typename?: 'Query', lessonsByCourse: Array<{ __typename?: 'Lesson', id: string, title: string, description?: string | null, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string }, lectures: Array<{ __typename?: 'Lecture', id: string, type: string, title: string, description: string, content?: string | null, link?: string | null, videoId?: string | null, videoStreamUrl?: string | null, thumbnailUrl?: string | null, quizType?: string | null, status?: string | null, questions?: Array<{ __typename?: 'QuizQuestion', questionType: string, question?: string | null, audioUrl?: string | null, imageUrl?: string | null, type: string, correctAnswers: Array<number>, options: Array<{ __typename?: 'QuizOption', index: number, text: string }> }> | null }> }> };

export type GetMyCourseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetMyCourseQuery = { __typename?: 'Query', myCourse: { __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, archivedDate?: string | null, slug: string, image?: string | null, introUrl?: string | null, introKey?: string | null, introFilename?: string | null, courseInformations?: Array<string> | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string }, lessons: Array<{ __typename?: 'PublicLesson', id: string, title: string, lectures?: Array<{ __typename?: 'PublicLecture', id: string, title: string, type: string }> | null }> } };

export type GetMyCoursesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<MyCoursesFilterInput>;
  sort?: InputMaybe<CourseSortInput>;
}>;


export type GetMyCoursesQuery = { __typename?: 'Query', myCourses: { __typename?: 'CourseConnection', totalCount: number, nodes: Array<{ __typename?: 'Course', id: string, title: string, description?: string | null, courseLevel: string, language?: string | null, courseInformations?: Array<string> | null, price: number, discount?: number | null, discountExpiresAt?: string | null, salePrice: number, status: string, publishDate?: string | null, slug: string, image?: string | null, introUrl?: string | null, introKey?: string | null, introFilename?: string | null, objectives?: Array<string> | null, whatWillGain?: Array<string> | null, enrollmentCount: number, viewCount: number, createdAt: string, updatedAt: string, prerequisites: Array<{ __typename?: 'Prerequisite', title: string, description?: string | null, link?: string | null }>, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, bio?: string | null, education?: string | null, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', jobTitle?: string | null } | null, courses: { __typename?: 'CourseConnection', totalCount: number } }, lessons: Array<{ __typename?: 'PublicLesson', id: string, title: string, description?: string | null }> }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean } } };

export type MyEnrolledCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyEnrolledCoursesQuery = { __typename?: 'Query', myEnrolledCourses: Array<{ __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, startedAt?: string | null, completedAt?: string | null, lastAccessedLessonId?: string | null, lastAccessedLectureId?: string | null, completedLessonIds: Array<string>, completedLectureIds: Array<string>, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string, slug: string, image?: string | null, courseLevel: string, price: number, salePrice: number, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, profilePicture?: string | null } } }> };

export type MyFavoriteCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFavoriteCoursesQuery = { __typename?: 'Query', myFavoriteCourses: Array<{ __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, startedAt?: string | null, completedAt?: string | null, lastAccessedLessonId?: string | null, lastAccessedLectureId?: string | null, completedLessonIds: Array<string>, completedLectureIds: Array<string>, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string, slug: string, image?: string | null, courseLevel: string, price: number, salePrice: number, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, profilePicture?: string | null } } }> };

export type MyWishlistCoursesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyWishlistCoursesQuery = { __typename?: 'Query', myWishlistCourses: Array<{ __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, startedAt?: string | null, completedAt?: string | null, lastAccessedLessonId?: string | null, lastAccessedLectureId?: string | null, completedLessonIds: Array<string>, completedLectureIds: Array<string>, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string, slug: string, image?: string | null, courseLevel: string, price: number, salePrice: number, description?: string | null, instructor: { __typename?: 'InstructorPublic', id: string, firstName: string, lastName: string, profilePicture?: string | null } } }> };

export type SearchSuggestionsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type SearchSuggestionsQuery = { __typename?: 'Query', searchSuggestions: Array<{ __typename?: 'SearchSuggestion', id: string, score?: number | null, text: string }> };

export type TopInstructorsQueryVariables = Exact<{ [key: string]: never; }>;


export type TopInstructorsQuery = { __typename?: 'Query', topInstructors: Array<{ __typename?: 'InstructorPublic', bio?: string | null, education?: string | null, firstName: string, id: string, lastName: string, profilePicture?: string | null, slug?: string | null, instructorInfo?: { __typename?: 'InstructorInfoPublic', interests?: Array<string> | null, jobTitle?: string | null } | null, courses: { __typename?: 'CourseConnection', totalCount: number, nodes: Array<{ __typename?: 'Course', enrollmentCount: number, introFilename?: string | null, introKey?: string | null, introUrl?: string | null, isApproved: boolean, isEnrolled?: boolean | null, isFavorite?: boolean | null, isOwner?: boolean | null, isWishlist?: boolean | null, language?: string | null, objectives?: Array<string> | null, price: number, publishDate?: string | null, salePrice: number, salesCount: number, slug: string, status: string, title: string, updatedAt: string, viewCount: number, whatWillGain?: Array<string> | null }> } }> };

export type UserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', age?: string | null, createdAt: string, email: string, education?: string | null, firstName: string, gender?: string | null, id: string, isVerified: boolean, lastName: string, phone?: string | null, profilePicture?: string | null, registrationStrategy: string, roles: Array<string>, updatedAt: string } };

export type UserCourseQueryVariables = Exact<{
  courseId: Scalars['ID']['input'];
}>;


export type UserCourseQuery = { __typename?: 'Query', userCourse?: { __typename?: 'UserCourse', id: string, courseId: string, userId: string, isEnrolled: boolean, isFavorite: boolean, progressPercentage: number, startedAt?: string | null, completedAt?: string | null, lastAccessedLessonId?: string | null, lastAccessedLectureId?: string | null, completedLessonIds: Array<string>, completedLectureIds: Array<string>, createdAt: string, updatedAt: string, course: { __typename?: 'Course', id: string, title: string, slug: string } } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', age?: string | null, createdAt: string, email: string, education?: string | null, firstName: string, gender?: string | null, id: string, isVerified: boolean, lastName: string, phone?: string | null, profilePicture?: string | null, registrationStrategy: string, roles: Array<string>, updatedAt: string }> };

export type VerifyForgetPasswordTokenQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type VerifyForgetPasswordTokenQuery = { __typename?: 'Query', verifyForgetPasswordToken: { __typename?: 'VerifyTokenResponse', valid: boolean, email?: string | null } };


export const BestSellingCoursesDocument = gql`
    query BestSellingCourses($first: Int!) {
  bestSellingCourses(first: $first, page: null) {
    totalCount
    edges {
      cursor
      node {
        _id
        approvedDate
        archivedDate
        courseInformations
        courseLevel
        createdAt
        deletedAt
        description
        discount
        discountExpiresAt
        enrollmentCount
        id
        image
        introFilename
        introKey
        introUrl
        isApproved
        isEnrolled
        isFavorite
        isOwner
        isWishlist
        language
        objectives
        price
        publishDate
        salePrice
        salesCount
        slug
        status
        title
        updatedAt
        viewCount
        whatWillGain
      }
    }
    facts(
      filter: {courseLevel: null, hasDiscount: null, instructorId: null, language: null, maxPrice: null, maxRating: null, minPrice: null, minRating: null, search: null, status: null}
    ) {
      categories {
        count
        value
      }
      levels {
        count
        value
      }
      priceRanges {
        count
        max
        min
      }
      ratings {
        count
        value
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    nodes {
      _id
      approvedDate
      archivedDate
      courseInformations
      courseLevel
      createdAt
      deletedAt
      description
      discount
      discountExpiresAt
      enrollmentCount
      id
      image
      introFilename
      introKey
      introUrl
      isApproved
      isEnrolled
      isFavorite
      isOwner
      isWishlist
      language
      objectives
      price
      publishDate
      salePrice
      salesCount
      slug
      status
      title
      updatedAt
      viewCount
      whatWillGain
    }
  }
}
    `;
export const ChangeCourseStatusDocument = gql`
    mutation changeCourseStatus($id: ID!, $input: ChangeCourseStatusInput!) {
  changeCourseStatus(id: $id, input: $input) {
    id
    title
    status
    publishDate
  }
}
    `;
export const ChangeMyPasswordDocument = gql`
    mutation ChangeMyPassword($input: ChangePasswordInput!) {
  changeMyPassword(input: $input) {
    message
  }
}
    `;
export const CreateCourseDocument = gql`
    mutation createCourse($input: CreateCourseInput!) {
  createCourse(input: $input) {
    id
    title
    description
    courseLevel
    language
    courseInformations
    price
    discount
    discountExpiresAt
    salePrice
    status
    publishDate
    image
    objectives
    whatWillGain
    prerequisites {
      title
      description
      link
    }
    instructor {
      id
      firstName
      lastName
      bio
      education
      profilePicture
      instructorInfo {
        jobTitle
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const CreateLectureDocument = gql`
    mutation createLecture($input: CreateLectureInput!) {
  createLecture(input: $input) {
    id
    type
    title
    description
    content
    link
    filename
    fileKey
    videoId
    videoStreamUrl
    thumbnailUrl
    quizType
    status
    questions {
      questionType
      question
      audioUrl
      imageUrl
      options {
        index
        text
      }
      type
      correctAnswers
    }
    lessonId
    createdAt
    updatedAt
  }
}
    `;
export const CreateLessonDocument = gql`
    mutation createLesson($input: CreateLessonInput!) {
  createLesson(input: $input) {
    id
    title
    description
    courseId
    course {
      id
      title
    }
    createdAt
    updatedAt
  }
}
    `;
export const DeleteCourseDocument = gql`
    mutation deleteCourse($id: ID!) {
  deleteCourse(id: $id)
}
    `;
export const DeleteFileDocument = gql`
    mutation deleteFile($key: String!) {
  deleteFile(key: $key)
}
    `;
export const DeleteLectureDocument = gql`
    mutation deleteLecture($id: ID!) {
  deleteLecture(id: $id)
}
    `;
export const DeleteLessonDocument = gql`
    mutation deleteLesson($id: ID!) {
  deleteLesson(id: $id)
}
    `;
export const DeleteVideoDocument = gql`
    mutation deleteVideo($m3u8Key: String!) {
  deleteVideo(m3u8Key: $m3u8Key)
}
    `;
export const EnrollCourseDocument = gql`
    mutation enrollCourse($input: EnrollCourseInput!) {
  enrollCourse(input: $input) {
    id
    courseId
    userId
    createdAt
    updatedAt
    course {
      id
      title
      slug
    }
  }
}
    `;
export const ForgetPasswordDocument = gql`
    mutation ForgetPassword($email: String!) {
  forgetPassword(email: $email) {
    message
  }
}
    `;
export const GetBunnyStreamUploadUrlDocument = gql`
    mutation getBunnyStreamUploadUrl($filename: String!, $lessonId: String!) {
  getBunnyStreamUploadUrl(filename: $filename, lessonId: $lessonId) {
    uploadUrl
    videoId
    libraryId
    authorizationSignature
    authorizationExpire
    title
  }
}
    `;
export const GetUploadSignedUrlDocument = gql`
    mutation GetUploadSignedUrl($filename: String!, $mimetype: String!, $folder: String, $expiresIn: Float) {
  getUploadSignedUrl(
    filename: $filename
    mimetype: $mimetype
    folder: $folder
    expiresIn: $expiresIn
  ) {
    uploadUrl
    key
    expiresIn
  }
}
    `;
export const GetVideoUploadUrlDocument = gql`
    mutation getVideoUploadUrl($filename: String!, $lessonId: String!) {
  getVideoUploadUrl(filename: $filename, lessonId: $lessonId) {
    uploadUrl
    key
    videoId
  }
}
    `;
export const GoogleSignInDocument = gql`
    mutation GoogleSignIn($input: GoogleSignInInput!) {
  googleSignIn(input: $input) {
    accessToken
    user {
      id
      email
      firstName
      lastName
      roles
      isVerified
      createdAt
    }
  }
}
    `;
export const JoinAsInstructorDocument = gql`
    mutation JoinAsInstructor {
  joinAsInstructor {
    id
    email
    firstName
    lastName
    roles
    instructorInfo {
      jobTitle
      interests
      socialLinks {
        website
        facebook
        twitter
        youtube
        instagram
        whatsapp
      }
      experience {
        title
        company
        description
        startDate
        endDate
        current
      }
      teachesLanguages {
        language
        isNative
        score
      }
      speaks {
        language
        isNative
        score
      }
    }
  }
}
    `;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    user {
      id
      email
      firstName
      lastName
      roles
      isVerified
      createdAt
    }
  }
}
    `;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
  }
}
    `;
export const ProcessVideoDocument = gql`
    mutation processVideo($lectureId: ID!, $lessonId: String!, $mp4Key: String!, $videoId: String!) {
  processVideo(
    lectureId: $lectureId
    lessonId: $lessonId
    mp4Key: $mp4Key
    videoId: $videoId
  ) {
    masterPlaylistKey
    videoStreamUrl
    videoId
    processingComplete
    variants {
      quality
      resolution
      bandwidth
      playlistKey
    }
  }
}
    `;
export const PublishCourseDocument = gql`
    mutation publishCourse($id: ID!, $input: PublishCourseInput!) {
  publishCourse(id: $id, input: $input) {
    id
    title
    status
    publishDate
  }
}
    `;
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    accessToken
    user {
      id
      email
      firstName
      lastName
      roles
      isVerified
      createdAt
    }
  }
}
    `;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $newPassword: String!, $oldPassword: String) {
  resetPassword(
    token: $token
    newPassword: $newPassword
    oldPassword: $oldPassword
  ) {
    message
  }
}
    `;
export const SendVerificationEmailDocument = gql`
    mutation SendVerificationEmail($email: String!) {
  sendVerificationEmail(email: $email) {
    message
  }
}
    `;
export const SignupDocument = gql`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    id
    email
    firstName
    lastName
    roles
    isVerified
    createdAt
  }
}
    `;
export const ToggleFavoriteCourseDocument = gql`
    mutation toggleFavoriteCourse($courseId: ID!) {
  toggleFavoriteCourse(courseId: $courseId) {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    course {
      id
      title
      slug
    }
  }
}
    `;
export const ToggleWishlistCourseDocument = gql`
    mutation toggleWishlistCourse($courseId: ID!) {
  toggleWishlistCourse(courseId: $courseId) {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    course {
      id
      title
      slug
    }
  }
}
    `;
export const UpdateCourseDocument = gql`
    mutation updateCourse($id: ID!, $input: UpdateCourseInput!) {
  updateCourse(id: $id, input: $input) {
    id
    title
    description
    courseLevel
    language
    courseInformations
    price
    discount
    discountExpiresAt
    salePrice
    status
    publishDate
    image
    introUrl
    introKey
    introFilename
    objectives
    whatWillGain
    prerequisites {
      title
      description
      link
    }
    instructor {
      id
      firstName
      lastName
      bio
      education
      profilePicture
      instructorInfo {
        jobTitle
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const UpdateInstructorInfoDocument = gql`
    mutation UpdateInstructorInfo($input: UpdateInstructorInfoInput!) {
  updateInstructorInfo(input: $input) {
    id
    email
    firstName
    lastName
    age
    createdAt
    gender
    isVerified
    education
    profilePicture
    roles
    phone
    updatedAt
    bio
    instructorInfo {
      jobTitle
      interests
      socialLinks {
        website
        facebook
        twitter
        youtube
        instagram
        whatsapp
      }
      experience {
        title
        company
        description
        startDate
        endDate
        current
      }
      teachesLanguages {
        language
        isNative
        score
      }
      speaks {
        language
        isNative
        score
      }
    }
  }
}
    `;
export const UpdateLectureDocument = gql`
    mutation updateLecture($id: ID!, $input: UpdateLectureInput!) {
  updateLecture(id: $id, input: $input) {
    id
    type
    title
    description
    content
    link
    filename
    fileKey
    videoId
    videoStreamUrl
    thumbnailUrl
    quizType
    status
    questions {
      questionType
      question
      audioUrl
      imageUrl
      options {
        index
        text
      }
      type
      correctAnswers
    }
    updatedAt
  }
}
    `;
export const UpdateLessonDocument = gql`
    mutation updateLesson($id: ID!, $input: UpdateLessonInput!) {
  updateLesson(id: $id, input: $input) {
    id
    title
    description
    updatedAt
  }
}
    `;
export const UpdateUserDocument = gql`
    mutation updateUser($id: ID!, $input: UpdateUserInput!) {
  updateUser(id: $id, input: $input) {
    age
    bio
    createdAt
    deletedAt
    education
    email
    firstName
    gender
    id
    isProfileComplete
    isVerified
    phone
    profilePicture
    registrationStrategy
    updatedAt
    lastName
  }
}
    `;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token) {
    message
  }
}
    `;
export const CourseBySlugDocument = gql`
    query courseBySlug($slug: String!) {
  courseBySlug(slug: $slug) {
    id
    title
    description
    courseLevel
    language
    courseInformations
    price
    discount
    discountExpiresAt
    salePrice
    status
    publishDate
    slug
    image
    introUrl
    introKey
    introFilename
    isWishlist
    isFavorite
    isEnrolled
    isOwner
    objectives
    whatWillGain
    prerequisites {
      title
      description
      link
    }
    instructor {
      id
      firstName
      lastName
      bio
      education
      profilePicture
      slug
      instructorInfo {
        jobTitle
      }
      courses(first: 10) {
        totalCount
      }
    }
    lessons {
      id
      title
      description
      lectures {
        id
        title
        type
        description
        thumbnailUrl
        metadata {
          duration
        }
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const CourseCategoriesDocument = gql`
    query CourseCategories($order: CourseCategoriesOrderInput) {
  courseCategories(order: $order) {
    languages {
      value
      count
    }
    levels {
      value
      count
    }
  }
}
    `;
export const GetCoursesDocument = gql`
    query GetCourses($first: Int, $page: Int, $filter: CourseFilterInput, $sort: CourseSortInput) {
  courses(first: $first, page: $page, filter: $filter, sort: $sort) {
    nodes {
      id
      title
      description
      courseLevel
      language
      price
      discount
      discountExpiresAt
      salePrice
      status
      publishDate
      slug
      image
      introUrl
      objectives
      whatWillGain
      enrollmentCount
      viewCount
      instructor {
        id
        firstName
        lastName
        profilePicture
        slug
        instructorInfo {
          jobTitle
        }
      }
      lessons {
        id
        title
        lectures {
          id
          type
          metadata {
            duration
          }
        }
      }
      createdAt
      updatedAt
    }
    facts(filter: $filter) {
      categories {
        value
        count
      }
      levels {
        value
        count
      }
      priceRanges {
        min
        max
        count
      }
      ratings {
        value
        count
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    `;
export const FiltersDocument = gql`
    query Filters($input: FiltersInput) {
  filters(input: $input) {
    categories {
      value
      count
    }
    levels {
      value
      count
    }
    priceRanges {
      min
      max
      count
    }
    ratings {
      value
      count
    }
  }
}
    `;
export const GetCourseAnalyticsDocument = gql`
    query GetCourseAnalytics($courseId: ID!) {
  courseAnalytics(courseId: $courseId) {
    courseId
    totalStudents
    totalViews
    completionRate
    recentActivity(page: 1, first: 20) {
      edges {
        node {
          type
          description
          createdAt
          userId
          courseId
          user {
            firstName
            lastName
          }
          course {
            title
          }
        }
      }
      nodes {
        type
        description
        createdAt
        userId
        courseId
        user {
          firstName
          lastName
        }
        course {
          title
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
}
    `;
export const GetInstructorAnalyticsDocument = gql`
    query GetInstructorAnalytics($instructorSlug: String!) {
  instructorAnalytics(instructorSlug: $instructorSlug) {
    instructorId
    mostPopularCourses(page: 1, first: 4) {
      nodes {
        course {
          id
          title
          description
          slug
          price
          image
        }
        enrollmentCount
        viewCount
        popularityScore
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
    mostPerformingCourses(page: 1, first: 4) {
      nodes {
        course {
          id
          title
          description
          slug
          price
          image
        }
        enrollmentCount
        viewCount
        performanceScore
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
}
    `;
export const GetInstructorInfoDocument = gql`
    query GetInstructorInfo {
  instructorInfo {
    jobTitle
    interests
    experience {
      title
      company
      description
      startDate
      endDate
      current
    }
    teachesLanguages {
      language
      isNative
      score
    }
    speaks {
      language
      isNative
      score
    }
  }
}
    `;
export const GetInstructorRecentActivityDocument = gql`
    query GetInstructorRecentActivity($instructorId: ID, $instructorSlug: String) {
  instructorAnalytics(
    instructorId: $instructorId
    instructorSlug: $instructorSlug
  ) {
    recentActivity {
      nodes {
        type
        description
        courseId
        userId
        createdAt
        user {
          firstName
          lastName
        }
        course {
          title
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
}
    `;
export const GetInstructorStatisticsDocument = gql`
    query GetInstructorStatistics($instructorId: ID, $instructorSlug: String) {
  instructorAnalytics(
    instructorId: $instructorId
    instructorSlug: $instructorSlug
  ) {
    totalCourses
    totalStudents
    totalPageViews
    totalCourseViews
  }
}
    `;
export const GetInstructorStudentsGrowthDocument = gql`
    query GetInstructorStudentsGrowth($instructorId: ID, $instructorSlug: String) {
  instructorAnalytics(
    instructorId: $instructorId
    instructorSlug: $instructorSlug
  ) {
    studentsGrowth {
      month
      students
      enrollments
      growthRate
    }
  }
}
    `;
export const GetLanguagesDocument = gql`
    query GetLanguages {
  languages
}
    `;
export const GetMyCourseLessonsDocument = gql`
    query GetMyCourseLessons($courseId: ID!) {
  getMyCourseLessons(courseId: $courseId) {
    id
    title
    description
    courseId
    lectures {
      id
      title
      description
      type
      videoStreamUrl
      videoId
      fileKey
      filename
      content
      status
      questions {
        questionType
        question
        audioUrl
        imageUrl
        options {
          index
          text
        }
        type
        correctAnswers
      }
      link
      thumbnailUrl
      quizType
    }
  }
}
    `;
export const GetMyUserInfoDocument = gql`
    query GetMyUserInfo {
  getMyUserInfo {
    id
    email
    firstName
    lastName
    age
    bio
    createdAt
    gender
    isVerified
    education
    profilePicture
    roles
    phone
    updatedAt
  }
}
    `;
export const InstructorBySlugDocument = gql`
    query instructorBySlug($slug: String!) {
  instructorBySlug(slug: $slug) {
    id
    firstName
    lastName
    bio
    education
    profilePicture
    slug
    instructorInfo {
      jobTitle
      interests
      experience {
        title
        company
        description
        startDate
        endDate
        current
      }
      speaks {
        language
        score
        isNative
      }
      teachesLanguages {
        language
        score
        isNative
      }
    }
    courses(first: 10) {
      totalCount
      nodes {
        id
        title
        description
        courseLevel
        price
        salePrice
        discount
        image
        status
        slug
        lessons {
          id
        }
      }
    }
  }
}
    `;
export const LearnCourseDocument = gql`
    query LearnCourse($courseId: ID!) {
  learnCourse(courseId: $courseId) {
    id
    title
    description
    courseLevel
    language
    courseInformations
    price
    discount
    discountExpiresAt
    salePrice
    status
    publishDate
    slug
    image
    introUrl
    introKey
    introFilename
    objectives
    whatWillGain
    prerequisites {
      title
      description
      link
    }
    instructor {
      id
      firstName
      lastName
      bio
      education
      profilePicture
      slug
      instructorInfo {
        jobTitle
      }
      courses(first: 10) {
        totalCount
      }
    }
    lessonsForLearning {
      id
      title
      description
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}
    `;
export const LectureDocument = gql`
    query lecture($id: ID!) {
  lecture(id: $id) {
    id
    type
    title
    description
    content
    link
    filename
    fileKey
    videoId
    videoStreamUrl
    quizType
    status
    thumbnailUrl
    metadata {
      duration
    }
    questions {
      questionType
      question
      audioUrl
      imageUrl
      options {
        index
        text
      }
      type
      correctAnswers
    }
    lesson {
      id
      title
      course {
        id
        title
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const LecturesByLessonForLearningDocument = gql`
    query LecturesByLessonForLearning($lessonId: ID!) {
  lecturesByLessonForLearning(lessonId: $lessonId) {
    id
    title
    description
    type
    content
    link
    filename
    fileKey
    videoId
    videoStreamUrl
    thumbnailUrl
    quizType
    status
    metadata {
      duration
    }
    questions {
      questionType
      question
      audioUrl
      imageUrl
      options {
        index
        text
      }
      type
      correctAnswers
    }
    createdAt
    updatedAt
  }
}
    `;
export const LessonDocument = gql`
    query lesson($id: ID!) {
  lesson(id: $id) {
    id
    title
    description
    course {
      id
      title
    }
    lectures {
      id
      type
      title
      description
      content
      link
      filename
      fileKey
      videoId
      videoStreamUrl
      thumbnailUrl
      quizType
      status
      questions {
        questionType
        question
        audioUrl
        imageUrl
        options {
          index
          text
        }
        type
        correctAnswers
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const LessonsByCourseDocument = gql`
    query lessonsByCourse($courseId: ID!) {
  lessonsByCourse(courseId: $courseId) {
    id
    title
    description
    course {
      id
      title
    }
    lectures {
      id
      type
      title
      description
      content
      link
      videoId
      videoStreamUrl
      thumbnailUrl
      quizType
      status
      questions {
        questionType
        question
        audioUrl
        imageUrl
        options {
          index
          text
        }
        type
        correctAnswers
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const GetMyCourseDocument = gql`
    query GetMyCourse($id: ID!) {
  myCourse(id: $id) {
    id
    title
    description
    courseLevel
    language
    price
    discount
    discountExpiresAt
    salePrice
    status
    publishDate
    archivedDate
    slug
    image
    introUrl
    introKey
    introFilename
    courseInformations
    objectives
    whatWillGain
    prerequisites {
      title
      description
      link
    }
    instructor {
      id
      firstName
      lastName
    }
    lessons {
      id
      title
      lectures {
        id
        title
        type
      }
    }
    createdAt
    updatedAt
  }
}
    `;
export const GetMyCoursesDocument = gql`
    query GetMyCourses($first: Int, $page: Int, $filter: MyCoursesFilterInput, $sort: CourseSortInput) {
  myCourses(first: $first, page: $page, filter: $filter, sort: $sort) {
    nodes {
      id
      title
      description
      courseLevel
      language
      courseInformations
      price
      discount
      discountExpiresAt
      salePrice
      status
      publishDate
      slug
      image
      introUrl
      introKey
      introFilename
      objectives
      whatWillGain
      prerequisites {
        title
        description
        link
      }
      instructor {
        id
        firstName
        lastName
        bio
        education
        profilePicture
        slug
        instructorInfo {
          jobTitle
        }
        courses(first: 10) {
          totalCount
        }
      }
      lessons {
        id
        title
        description
      }
      enrollmentCount
      viewCount
      createdAt
      updatedAt
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    totalCount
  }
}
    `;
export const MyEnrolledCoursesDocument = gql`
    query myEnrolledCourses {
  myEnrolledCourses {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    startedAt
    completedAt
    lastAccessedLessonId
    lastAccessedLectureId
    completedLessonIds
    completedLectureIds
    createdAt
    updatedAt
    course {
      id
      title
      slug
      image
      courseLevel
      price
      salePrice
      instructor {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
}
    `;
export const MyFavoriteCoursesDocument = gql`
    query myFavoriteCourses {
  myFavoriteCourses {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    startedAt
    completedAt
    lastAccessedLessonId
    lastAccessedLectureId
    completedLessonIds
    completedLectureIds
    createdAt
    updatedAt
    course {
      id
      title
      slug
      image
      courseLevel
      price
      salePrice
      instructor {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
}
    `;
export const MyWishlistCoursesDocument = gql`
    query myWishlistCourses {
  myWishlistCourses {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    startedAt
    completedAt
    lastAccessedLessonId
    lastAccessedLectureId
    completedLessonIds
    completedLectureIds
    createdAt
    updatedAt
    course {
      id
      title
      slug
      image
      courseLevel
      price
      salePrice
      description
      instructor {
        id
        firstName
        lastName
        profilePicture
      }
    }
  }
}
    `;
export const SearchSuggestionsDocument = gql`
    query searchSuggestions($searchTerm: String!, $limit: Int) {
  searchSuggestions(searchTerm: $searchTerm, limit: $limit) {
    id
    score
    text
  }
}
    `;
export const TopInstructorsDocument = gql`
    query TopInstructors {
  topInstructors {
    bio
    education
    firstName
    id
    lastName
    profilePicture
    slug
    instructorInfo {
      interests
      jobTitle
    }
    courses {
      totalCount
      nodes {
        enrollmentCount
        introFilename
        introKey
        introUrl
        isApproved
        isEnrolled
        isFavorite
        isOwner
        isWishlist
        language
        objectives
        price
        publishDate
        salePrice
        salesCount
        slug
        status
        title
        updatedAt
        viewCount
        whatWillGain
      }
    }
  }
}
    `;
export const UserDocument = gql`
    query user($id: ID!) {
  user(id: $id) {
    age
    createdAt
    email
    education
    firstName
    gender
    id
    isVerified
    lastName
    phone
    profilePicture
    registrationStrategy
    roles
    updatedAt
  }
}
    `;
export const UserCourseDocument = gql`
    query userCourse($courseId: ID!) {
  userCourse(courseId: $courseId) {
    id
    courseId
    userId
    isEnrolled
    isFavorite
    progressPercentage
    startedAt
    completedAt
    lastAccessedLessonId
    lastAccessedLectureId
    completedLessonIds
    completedLectureIds
    createdAt
    updatedAt
    course {
      id
      title
      slug
    }
  }
}
    `;
export const UsersDocument = gql`
    query users {
  users {
    age
    createdAt
    email
    education
    firstName
    gender
    id
    isVerified
    lastName
    phone
    profilePicture
    registrationStrategy
    roles
    updatedAt
  }
}
    `;
export const VerifyForgetPasswordTokenDocument = gql`
    query VerifyForgetPasswordToken($token: String!) {
  verifyForgetPasswordToken(token: $token) {
    valid
    email
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    BestSellingCourses(variables: BestSellingCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<BestSellingCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BestSellingCoursesQuery>({ document: BestSellingCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'BestSellingCourses', 'query', variables);
    },
    changeCourseStatus(variables: ChangeCourseStatusMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ChangeCourseStatusMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeCourseStatusMutation>({ document: ChangeCourseStatusDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'changeCourseStatus', 'mutation', variables);
    },
    ChangeMyPassword(variables: ChangeMyPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ChangeMyPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeMyPasswordMutation>({ document: ChangeMyPasswordDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ChangeMyPassword', 'mutation', variables);
    },
    createCourse(variables: CreateCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCourseMutation>({ document: CreateCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'createCourse', 'mutation', variables);
    },
    createLecture(variables: CreateLectureMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateLectureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateLectureMutation>({ document: CreateLectureDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'createLecture', 'mutation', variables);
    },
    createLesson(variables: CreateLessonMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreateLessonMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateLessonMutation>({ document: CreateLessonDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'createLesson', 'mutation', variables);
    },
    deleteCourse(variables: DeleteCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCourseMutation>({ document: DeleteCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'deleteCourse', 'mutation', variables);
    },
    deleteFile(variables: DeleteFileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteFileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteFileMutation>({ document: DeleteFileDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'deleteFile', 'mutation', variables);
    },
    deleteLecture(variables: DeleteLectureMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteLectureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteLectureMutation>({ document: DeleteLectureDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'deleteLecture', 'mutation', variables);
    },
    deleteLesson(variables: DeleteLessonMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteLessonMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteLessonMutation>({ document: DeleteLessonDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'deleteLesson', 'mutation', variables);
    },
    deleteVideo(variables: DeleteVideoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteVideoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteVideoMutation>({ document: DeleteVideoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'deleteVideo', 'mutation', variables);
    },
    enrollCourse(variables: EnrollCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<EnrollCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<EnrollCourseMutation>({ document: EnrollCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'enrollCourse', 'mutation', variables);
    },
    ForgetPassword(variables: ForgetPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ForgetPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ForgetPasswordMutation>({ document: ForgetPasswordDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ForgetPassword', 'mutation', variables);
    },
    getBunnyStreamUploadUrl(variables: GetBunnyStreamUploadUrlMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetBunnyStreamUploadUrlMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBunnyStreamUploadUrlMutation>({ document: GetBunnyStreamUploadUrlDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getBunnyStreamUploadUrl', 'mutation', variables);
    },
    GetUploadSignedUrl(variables: GetUploadSignedUrlMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetUploadSignedUrlMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUploadSignedUrlMutation>({ document: GetUploadSignedUrlDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetUploadSignedUrl', 'mutation', variables);
    },
    getVideoUploadUrl(variables: GetVideoUploadUrlMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetVideoUploadUrlMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetVideoUploadUrlMutation>({ document: GetVideoUploadUrlDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getVideoUploadUrl', 'mutation', variables);
    },
    GoogleSignIn(variables: GoogleSignInMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GoogleSignInMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GoogleSignInMutation>({ document: GoogleSignInDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GoogleSignIn', 'mutation', variables);
    },
    JoinAsInstructor(variables?: JoinAsInstructorMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<JoinAsInstructorMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<JoinAsInstructorMutation>({ document: JoinAsInstructorDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'JoinAsInstructor', 'mutation', variables);
    },
    Login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>({ document: LoginDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Login', 'mutation', variables);
    },
    Logout(variables?: LogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>({ document: LogoutDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Logout', 'mutation', variables);
    },
    processVideo(variables: ProcessVideoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ProcessVideoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProcessVideoMutation>({ document: ProcessVideoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'processVideo', 'mutation', variables);
    },
    publishCourse(variables: PublishCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<PublishCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<PublishCourseMutation>({ document: PublishCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'publishCourse', 'mutation', variables);
    },
    RefreshToken(variables?: RefreshTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenMutation>({ document: RefreshTokenDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'RefreshToken', 'mutation', variables);
    },
    ResetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ResetPasswordMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ResetPasswordMutation>({ document: ResetPasswordDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'ResetPassword', 'mutation', variables);
    },
    SendVerificationEmail(variables: SendVerificationEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SendVerificationEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendVerificationEmailMutation>({ document: SendVerificationEmailDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SendVerificationEmail', 'mutation', variables);
    },
    Signup(variables: SignupMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SignupMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SignupMutation>({ document: SignupDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Signup', 'mutation', variables);
    },
    toggleFavoriteCourse(variables: ToggleFavoriteCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ToggleFavoriteCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleFavoriteCourseMutation>({ document: ToggleFavoriteCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'toggleFavoriteCourse', 'mutation', variables);
    },
    toggleWishlistCourse(variables: ToggleWishlistCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ToggleWishlistCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ToggleWishlistCourseMutation>({ document: ToggleWishlistCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'toggleWishlistCourse', 'mutation', variables);
    },
    updateCourse(variables: UpdateCourseMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateCourseMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCourseMutation>({ document: UpdateCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateCourse', 'mutation', variables);
    },
    UpdateInstructorInfo(variables: UpdateInstructorInfoMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateInstructorInfoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateInstructorInfoMutation>({ document: UpdateInstructorInfoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdateInstructorInfo', 'mutation', variables);
    },
    updateLecture(variables: UpdateLectureMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateLectureMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateLectureMutation>({ document: UpdateLectureDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateLecture', 'mutation', variables);
    },
    updateLesson(variables: UpdateLessonMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateLessonMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateLessonMutation>({ document: UpdateLessonDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateLesson', 'mutation', variables);
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>({ document: UpdateUserDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'updateUser', 'mutation', variables);
    },
    VerifyEmail(variables: VerifyEmailMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<VerifyEmailMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyEmailMutation>({ document: VerifyEmailDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'VerifyEmail', 'mutation', variables);
    },
    courseBySlug(variables: CourseBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CourseBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CourseBySlugQuery>({ document: CourseBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'courseBySlug', 'query', variables);
    },
    CourseCategories(variables?: CourseCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CourseCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CourseCategoriesQuery>({ document: CourseCategoriesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CourseCategories', 'query', variables);
    },
    GetCourses(variables?: GetCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCoursesQuery>({ document: GetCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCourses', 'query', variables);
    },
    Filters(variables?: FiltersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<FiltersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FiltersQuery>({ document: FiltersDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Filters', 'query', variables);
    },
    GetCourseAnalytics(variables: GetCourseAnalyticsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetCourseAnalyticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCourseAnalyticsQuery>({ document: GetCourseAnalyticsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetCourseAnalytics', 'query', variables);
    },
    GetInstructorAnalytics(variables: GetInstructorAnalyticsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetInstructorAnalyticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInstructorAnalyticsQuery>({ document: GetInstructorAnalyticsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetInstructorAnalytics', 'query', variables);
    },
    GetInstructorInfo(variables?: GetInstructorInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetInstructorInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInstructorInfoQuery>({ document: GetInstructorInfoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetInstructorInfo', 'query', variables);
    },
    GetInstructorRecentActivity(variables?: GetInstructorRecentActivityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetInstructorRecentActivityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInstructorRecentActivityQuery>({ document: GetInstructorRecentActivityDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetInstructorRecentActivity', 'query', variables);
    },
    GetInstructorStatistics(variables?: GetInstructorStatisticsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetInstructorStatisticsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInstructorStatisticsQuery>({ document: GetInstructorStatisticsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetInstructorStatistics', 'query', variables);
    },
    GetInstructorStudentsGrowth(variables?: GetInstructorStudentsGrowthQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetInstructorStudentsGrowthQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetInstructorStudentsGrowthQuery>({ document: GetInstructorStudentsGrowthDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetInstructorStudentsGrowth', 'query', variables);
    },
    GetLanguages(variables?: GetLanguagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetLanguagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLanguagesQuery>({ document: GetLanguagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetLanguages', 'query', variables);
    },
    GetMyCourseLessons(variables: GetMyCourseLessonsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetMyCourseLessonsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyCourseLessonsQuery>({ document: GetMyCourseLessonsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetMyCourseLessons', 'query', variables);
    },
    GetMyUserInfo(variables?: GetMyUserInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetMyUserInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyUserInfoQuery>({ document: GetMyUserInfoDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetMyUserInfo', 'query', variables);
    },
    instructorBySlug(variables: InstructorBySlugQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<InstructorBySlugQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<InstructorBySlugQuery>({ document: InstructorBySlugDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'instructorBySlug', 'query', variables);
    },
    LearnCourse(variables: LearnCourseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LearnCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LearnCourseQuery>({ document: LearnCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LearnCourse', 'query', variables);
    },
    lecture(variables: LectureQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LectureQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LectureQuery>({ document: LectureDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'lecture', 'query', variables);
    },
    LecturesByLessonForLearning(variables: LecturesByLessonForLearningQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LecturesByLessonForLearningQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LecturesByLessonForLearningQuery>({ document: LecturesByLessonForLearningDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LecturesByLessonForLearning', 'query', variables);
    },
    lesson(variables: LessonQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LessonQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LessonQuery>({ document: LessonDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'lesson', 'query', variables);
    },
    lessonsByCourse(variables: LessonsByCourseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LessonsByCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LessonsByCourseQuery>({ document: LessonsByCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'lessonsByCourse', 'query', variables);
    },
    GetMyCourse(variables: GetMyCourseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetMyCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyCourseQuery>({ document: GetMyCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetMyCourse', 'query', variables);
    },
    GetMyCourses(variables?: GetMyCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetMyCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMyCoursesQuery>({ document: GetMyCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetMyCourses', 'query', variables);
    },
    myEnrolledCourses(variables?: MyEnrolledCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MyEnrolledCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyEnrolledCoursesQuery>({ document: MyEnrolledCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'myEnrolledCourses', 'query', variables);
    },
    myFavoriteCourses(variables?: MyFavoriteCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MyFavoriteCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyFavoriteCoursesQuery>({ document: MyFavoriteCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'myFavoriteCourses', 'query', variables);
    },
    myWishlistCourses(variables?: MyWishlistCoursesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MyWishlistCoursesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MyWishlistCoursesQuery>({ document: MyWishlistCoursesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'myWishlistCourses', 'query', variables);
    },
    searchSuggestions(variables: SearchSuggestionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SearchSuggestionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchSuggestionsQuery>({ document: SearchSuggestionsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'searchSuggestions', 'query', variables);
    },
    TopInstructors(variables?: TopInstructorsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<TopInstructorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TopInstructorsQuery>({ document: TopInstructorsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'TopInstructors', 'query', variables);
    },
    user(variables: UserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>({ document: UserDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'user', 'query', variables);
    },
    userCourse(variables: UserCourseQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UserCourseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserCourseQuery>({ document: UserCourseDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'userCourse', 'query', variables);
    },
    users(variables?: UsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>({ document: UsersDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'users', 'query', variables);
    },
    VerifyForgetPasswordToken(variables: VerifyForgetPasswordTokenQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<VerifyForgetPasswordTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyForgetPasswordTokenQuery>({ document: VerifyForgetPasswordTokenDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'VerifyForgetPasswordToken', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;