import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
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


export const BestSellingCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BestSellingCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bestSellingCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"NullValue"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"approvedDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlist"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"salesCount"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"facts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"courseLevel"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"hasDiscount"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"instructorId"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"language"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"maxPrice"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"maxRating"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"minPrice"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"minRating"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"search"},"value":{"kind":"NullValue"}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"NullValue"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceRanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"min"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"approvedDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlist"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"salesCount"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}}]}}]}}]}}]} as unknown as DocumentNode<BestSellingCoursesQuery, BestSellingCoursesQueryVariables>;
export const ChangeCourseStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeCourseStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeCourseStatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeCourseStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}}]}}]}}]} as unknown as DocumentNode<ChangeCourseStatusMutation, ChangeCourseStatusMutationVariables>;
export const ChangeMyPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ChangeMyPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeMyPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ChangeMyPasswordMutation, ChangeMyPasswordMutationVariables>;
export const CreateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateCourseMutation, CreateCourseMutationVariables>;
export const CreateLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateLectureMutation, CreateLectureMutationVariables>;
export const CreateLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLessonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateLessonMutation, CreateLessonMutationVariables>;
export const DeleteCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteCourseMutation, DeleteCourseMutationVariables>;
export const DeleteFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}]}}]} as unknown as DocumentNode<DeleteFileMutation, DeleteFileMutationVariables>;
export const DeleteLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteLectureMutation, DeleteLectureMutationVariables>;
export const DeleteLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]} as unknown as DocumentNode<DeleteLessonMutation, DeleteLessonMutationVariables>;
export const DeleteVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"m3u8Key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"m3u8Key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"m3u8Key"}}}]}]}}]} as unknown as DocumentNode<DeleteVideoMutation, DeleteVideoMutationVariables>;
export const EnrollCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"enrollCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EnrollCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enrollCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<EnrollCourseMutation, EnrollCourseMutationVariables>;
export const ForgetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ForgetPasswordMutation, ForgetPasswordMutationVariables>;
export const GetBunnyStreamUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getBunnyStreamUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBunnyStreamUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"lessonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"libraryId"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationSignature"}},{"kind":"Field","name":{"kind":"Name","value":"authorizationExpire"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetBunnyStreamUploadUrlMutation, GetBunnyStreamUploadUrlMutationVariables>;
export const GetUploadSignedUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetUploadSignedUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mimetype"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folder"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"expiresIn"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUploadSignedUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"mimetype"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mimetype"}}},{"kind":"Argument","name":{"kind":"Name","value":"folder"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folder"}}},{"kind":"Argument","name":{"kind":"Name","value":"expiresIn"},"value":{"kind":"Variable","name":{"kind":"Name","value":"expiresIn"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"expiresIn"}}]}}]}}]} as unknown as DocumentNode<GetUploadSignedUrlMutation, GetUploadSignedUrlMutationVariables>;
export const GetVideoUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"getVideoUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filename"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getVideoUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filename"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filename"}}},{"kind":"Argument","name":{"kind":"Name","value":"lessonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadUrl"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}}]}}]}}]} as unknown as DocumentNode<GetVideoUploadUrlMutation, GetVideoUploadUrlMutationVariables>;
export const GoogleSignInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GoogleSignIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GoogleSignInInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"googleSignIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GoogleSignInMutation, GoogleSignInMutationVariables>;
export const JoinAsInstructorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"JoinAsInstructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"joinAsInstructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"whatsapp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teachesLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]}}]} as unknown as DocumentNode<JoinAsInstructorMutation, JoinAsInstructorMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const ProcessVideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"processVideo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lectureId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mp4Key"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"processVideo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lectureId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lectureId"}}},{"kind":"Argument","name":{"kind":"Name","value":"lessonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}}},{"kind":"Argument","name":{"kind":"Name","value":"mp4Key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mp4Key"}}},{"kind":"Argument","name":{"kind":"Name","value":"videoId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"videoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"masterPlaylistKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"processingComplete"}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quality"}},{"kind":"Field","name":{"kind":"Name","value":"resolution"}},{"kind":"Field","name":{"kind":"Name","value":"bandwidth"}},{"kind":"Field","name":{"kind":"Name","value":"playlistKey"}}]}}]}}]}}]} as unknown as DocumentNode<ProcessVideoMutation, ProcessVideoMutationVariables>;
export const PublishCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"publishCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PublishCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"publishCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}}]}}]}}]} as unknown as DocumentNode<PublishCourseMutation, PublishCourseMutationVariables>;
export const RefreshTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RefreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const ResetPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"newPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newPassword"}}},{"kind":"Argument","name":{"kind":"Name","value":"oldPassword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPassword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SendVerificationEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendVerificationEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendVerificationEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SendVerificationEmailMutation, SendVerificationEmailMutationVariables>;
export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const ToggleFavoriteCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleFavoriteCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleFavoriteCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleFavoriteCourseMutation, ToggleFavoriteCourseMutationVariables>;
export const ToggleWishlistCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleWishlistCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleWishlistCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleWishlistCourseMutation, ToggleWishlistCourseMutationVariables>;
export const UpdateCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCourseInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateCourseMutation, UpdateCourseMutationVariables>;
export const UpdateInstructorInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateInstructorInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateInstructorInfoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateInstructorInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"socialLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"facebook"}},{"kind":"Field","name":{"kind":"Name","value":"twitter"}},{"kind":"Field","name":{"kind":"Name","value":"youtube"}},{"kind":"Field","name":{"kind":"Name","value":"instagram"}},{"kind":"Field","name":{"kind":"Name","value":"whatsapp"}}]}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teachesLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UpdateInstructorInfoMutation, UpdateInstructorInfoMutationVariables>;
export const UpdateLectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLectureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateLectureMutation, UpdateLectureMutationVariables>;
export const UpdateLessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateLesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateLessonInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateLessonMutation, UpdateLessonMutationVariables>;
export const UpdateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isProfileComplete"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"registrationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}}]}}]} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const VerifyEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"VerifyEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const CourseBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"courseBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlist"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CourseBySlugQuery, CourseBySlugQueryVariables>;
export const CourseCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CourseCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseCategoriesOrderInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<CourseCategoriesQuery, CourseCategoriesQueryVariables>;
export const GetCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseSortInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"facts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceRanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetCoursesQuery, GetCoursesQueryVariables>;
export const FiltersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Filters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"FiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"filters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"levels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priceRanges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"min"}},{"kind":"Field","name":{"kind":"Name","value":"max"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ratings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<FiltersQuery, FiltersQueryVariables>;
export const GetCourseAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCourseAnalytics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseAnalytics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"totalStudents"}},{"kind":"Field","name":{"kind":"Name","value":"totalViews"}},{"kind":"Field","name":{"kind":"Name","value":"completionRate"}},{"kind":"Field","name":{"kind":"Name","value":"recentActivity"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetCourseAnalyticsQuery, GetCourseAnalyticsQueryVariables>;
export const GetInstructorAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructorAnalytics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorAnalytics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"instructorSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorId"}},{"kind":"Field","name":{"kind":"Name","value":"mostPopularCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"popularityScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mostPerformingCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"performanceScore"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstructorAnalyticsQuery, GetInstructorAnalyticsQueryVariables>;
export const GetInstructorInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teachesLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}},{"kind":"Field","name":{"kind":"Name","value":"score"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstructorInfoQuery, GetInstructorInfoQueryVariables>;
export const GetInstructorRecentActivityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructorRecentActivity"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorAnalytics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"instructorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"instructorSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recentActivity"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstructorRecentActivityQuery, GetInstructorRecentActivityQueryVariables>;
export const GetInstructorStatisticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructorStatistics"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorAnalytics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"instructorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"instructorSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCourses"}},{"kind":"Field","name":{"kind":"Name","value":"totalStudents"}},{"kind":"Field","name":{"kind":"Name","value":"totalPageViews"}},{"kind":"Field","name":{"kind":"Name","value":"totalCourseViews"}}]}}]}}]} as unknown as DocumentNode<GetInstructorStatisticsQuery, GetInstructorStatisticsQueryVariables>;
export const GetInstructorStudentsGrowthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructorStudentsGrowth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorAnalytics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"instructorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"instructorSlug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"instructorSlug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studentsGrowth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"month"}},{"kind":"Field","name":{"kind":"Name","value":"students"}},{"kind":"Field","name":{"kind":"Name","value":"enrollments"}},{"kind":"Field","name":{"kind":"Name","value":"growthRate"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstructorStudentsGrowthQuery, GetInstructorStudentsGrowthQueryVariables>;
export const GetLanguagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"languages"}}]}}]} as unknown as DocumentNode<GetLanguagesQuery, GetLanguagesQueryVariables>;
export const GetMyCourseLessonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCourseLessons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyCourseLessons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}}]}}]}}]}}]} as unknown as DocumentNode<GetMyCourseLessonsQuery, GetMyCourseLessonsQueryVariables>;
export const GetMyUserInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getMyUserInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMyUserInfoQuery, GetMyUserInfoQueryVariables>;
export const InstructorBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"instructorBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"experience"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"company"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"current"}}]}},{"kind":"Field","name":{"kind":"Name","value":"speaks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teachesLanguages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"isNative"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<InstructorBySlugQuery, InstructorBySlugQueryVariables>;
export const LearnCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LearnCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"learnCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessonsForLearning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LearnCourseQuery, LearnCourseQueryVariables>;
export const LectureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"lecture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lecture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lesson"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LectureQuery, LectureQueryVariables>;
export const LecturesByLessonForLearningDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"LecturesByLessonForLearning"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lecturesByLessonForLearning"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"lessonId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"lessonId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"duration"}}]}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LecturesByLessonForLearningQuery, LecturesByLessonForLearningQueryVariables>;
export const LessonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"lesson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lesson"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"filename"}},{"kind":"Field","name":{"kind":"Name","value":"fileKey"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LessonQuery, LessonQueryVariables>;
export const LessonsByCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"lessonsByCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lessonsByCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"videoId"}},{"kind":"Field","name":{"kind":"Name","value":"videoStreamUrl"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}},{"kind":"Field","name":{"kind":"Name","value":"quizType"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"questionType"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"audioUrl"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswers"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<LessonsByCourseQuery, LessonsByCourseQueryVariables>;
export const GetMyCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"archivedDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"lectures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetMyCourseQuery, GetMyCourseQueryVariables>;
export const GetMyCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMyCourses"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MyCoursesFilterInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sort"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CourseSortInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myCourses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sort"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"courseInformations"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discountExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}},{"kind":"Field","name":{"kind":"Name","value":"prerequisites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"link"}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"lessons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<GetMyCoursesQuery, GetMyCoursesQueryVariables>;
export const MyEnrolledCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myEnrolledCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myEnrolledCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLessonId"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLectureId"}},{"kind":"Field","name":{"kind":"Name","value":"completedLessonIds"}},{"kind":"Field","name":{"kind":"Name","value":"completedLectureIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyEnrolledCoursesQuery, MyEnrolledCoursesQueryVariables>;
export const MyFavoriteCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myFavoriteCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myFavoriteCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLessonId"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLectureId"}},{"kind":"Field","name":{"kind":"Name","value":"completedLessonIds"}},{"kind":"Field","name":{"kind":"Name","value":"completedLectureIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyFavoriteCoursesQuery, MyFavoriteCoursesQueryVariables>;
export const MyWishlistCoursesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myWishlistCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myWishlistCourses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLessonId"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLectureId"}},{"kind":"Field","name":{"kind":"Name","value":"completedLessonIds"}},{"kind":"Field","name":{"kind":"Name","value":"completedLectureIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"courseLevel"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"instructor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MyWishlistCoursesQuery, MyWishlistCoursesQueryVariables>;
export const SearchSuggestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchSuggestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchSuggestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchTerm"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchTerm"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<SearchSuggestionsQuery, SearchSuggestionsQueryVariables>;
export const TopInstructorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TopInstructors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topInstructors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"instructorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interests"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"enrollmentCount"}},{"kind":"Field","name":{"kind":"Name","value":"introFilename"}},{"kind":"Field","name":{"kind":"Name","value":"introKey"}},{"kind":"Field","name":{"kind":"Name","value":"introUrl"}},{"kind":"Field","name":{"kind":"Name","value":"isApproved"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"isOwner"}},{"kind":"Field","name":{"kind":"Name","value":"isWishlist"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"objectives"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"publishDate"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"salesCount"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"viewCount"}},{"kind":"Field","name":{"kind":"Name","value":"whatWillGain"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TopInstructorsQuery, TopInstructorsQueryVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"user"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"registrationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserCourseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userCourse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCourse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"courseId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"courseId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"courseId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"isEnrolled"}},{"kind":"Field","name":{"kind":"Name","value":"isFavorite"}},{"kind":"Field","name":{"kind":"Name","value":"progressPercentage"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"completedAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLessonId"}},{"kind":"Field","name":{"kind":"Name","value":"lastAccessedLectureId"}},{"kind":"Field","name":{"kind":"Name","value":"completedLessonIds"}},{"kind":"Field","name":{"kind":"Name","value":"completedLectureIds"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"course"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<UserCourseQuery, UserCourseQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"education"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"profilePicture"}},{"kind":"Field","name":{"kind":"Name","value":"registrationStrategy"}},{"kind":"Field","name":{"kind":"Name","value":"roles"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const VerifyForgetPasswordTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyForgetPasswordToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyForgetPasswordToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valid"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<VerifyForgetPasswordTokenQuery, VerifyForgetPasswordTokenQueryVariables>;