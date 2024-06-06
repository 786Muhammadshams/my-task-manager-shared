import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';

cloudinary.v2.config({
  cloud_name: 'duib0nenr',
  api_key: '823463461377819',
  api_secret: 'FCoVX-5IcvO8u53fW656hFQBzhA',
});

export interface CloudinaryUpload {
  file: string;
  public_id?: string;
  overwrite?: boolean;
  invalidate?: boolean;
}

export function uploadFile(
  payload: CloudinaryUpload
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
  const { file, public_id, overwrite, invalidate } = payload;
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        resource_type: 'auto', // zip, images
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}

export function uploadVideo(
  payload: CloudinaryUpload
): Promise<UploadApiErrorResponse | UploadApiResponse | undefined> {
  const { file, public_id, overwrite, invalidate } = payload;
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate,
        chunk_size: 50000,
        resource_type: 'video',
      },
      (
        error: UploadApiErrorResponse | undefined,
        result: UploadApiResponse | undefined
      ) => {
        if (error) resolve(error);
        resolve(result);
      }
    );
  });
}
