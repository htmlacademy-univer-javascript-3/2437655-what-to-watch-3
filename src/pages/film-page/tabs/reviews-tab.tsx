import {formatDate} from '../../../helpers/formatter';
import {Loader} from '../../../components/loader';
import {useComments} from '../../../hooks/films';
import {usePathId} from '../../../hooks/usePathId';

export function ReviewsTab(): JSX.Element {
  const id = usePathId();
  const { data: comments, isLoading } = useComments(id);
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <Loader isLoading={isLoading}>
          {comments.map((comment) => (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user}</cite>
                  <time className="review__date" dateTime="2016-12-24">
                    {formatDate(comment.date)}
                  </time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          ))}
        </Loader>
      </div>
    </div>
  );
}
