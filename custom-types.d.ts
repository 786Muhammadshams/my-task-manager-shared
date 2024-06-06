// custom-types.d.ts
declare module 'cloudinary' {
  namespace cloudinary {
    namespace v2 {
      function config(options: {
        cloud_name: string;
        api_key: string;
        api_secret: string;
      }): void;

      namespace uploader {
        function upload(
          file: string,
          options: {
            public_id?: string;
            overwrite?: boolean;
            invalidate?: boolean;
            resource_type?: string;
            chunk_size?: number;
          },
          callback: (error: any, result: any) => void
        ): void;
      }
    }
  }

  export default cloudinary;
}
