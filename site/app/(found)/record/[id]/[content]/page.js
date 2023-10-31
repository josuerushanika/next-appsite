import { RECORDS, CONTENT_PATHS, RECORDS_MAP } from "../data";


export async function generatedStaticParams() {
    const recordSegmentMaps = [];

    RECORDS.forEach(record => {
      CONTENT_PATHS.forEach(contentPath => {
        recordSegmentMaps.push({id: record.id, content: contentPath }); 
      });
    });

    return recordSegmentMaps;
}

export default function Page({ params: { id, content } }) {
    const contentJsx = RECORDS_MAP[id] [content];

    return contentJsx;
}
