import importlib.util
import pathlib
import unittest

spec = importlib.util.spec_from_file_location('fetcher', pathlib.Path(__file__).with_name('fetch-youtube-details.py'))
fetcher = importlib.util.module_from_spec(spec)
spec.loader.exec_module(fetcher)


class MetadataTests(unittest.TestCase):
    def test_missing_video_is_explicit(self):
        records = fetcher.normalize(['XMd9F9OpfsU'], [], '2026-09-10T00:00:00Z')
        self.assertEqual(records[0]['fetch_status'], 'unavailable')
        self.assertNotIn('title', records[0])

    def test_metadata_and_channel_guard(self):
        item = {'id': 'XMd9F9OpfsU', 'snippet': {
            'channelId': fetcher.CHANNEL, 'title': 'Example', 'description': 'Description',
            'publishedAt': '2026-01-01T00:00:00Z',
            'thumbnails': {'default': {'url': 'small'}, 'high': {'url': 'large'}}},
            'contentDetails': {'duration': 'PT10M'}}
        record = fetcher.normalize([item['id']], [item], '2026-09-10T00:00:00Z')[0]
        self.assertEqual(record['thumbnail_url'], 'large')
        self.assertEqual(record['duration_iso8601'], 'PT10M')
        self.assertEqual(record['fetch_status'], 'available')
        item['snippet']['channelId'] = 'another-channel'
        with self.assertRaises(ValueError):
            fetcher.normalize([item['id']], [item], '2026-09-10T00:00:00Z')


if __name__ == '__main__':
    unittest.main()
