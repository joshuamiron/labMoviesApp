# Enterprise Web Development - Assignment 1.

__Name:__ Joshua Miron

## Overview.

+ Multiple new views, routed and/or parameterized.
+ Empty state pages for Favourite movies and people, My Playlist, My Made Up Movies, with appropriate call-to-actions.
+ Enhanced list views:
    + Tagging / untagging functionality for both Favourites and My Playlist across all pages.
    + Pagination for all list views
+ Enhanced Details views :
    + Added a horizontally scrolling strip of posters to Movies.  Posters can be clicked to be enlarged.
    + Added a horizontally scrolling strip of movie's cast to Movies, using a small version of the person card. Card lists the actor's name and role in the movie, and can be tagged as favourite and links to the person's detail page.
    + Added a horizontally scrolling strip of "Similar Movies" to Movies, using a small version of the movie card.  Movie be tagged for Playlist or clicked for a details page.
    + Added Person Details view, also with a horizontally scrolling strip of additional profile pictures and the person's movie roles. Pictures can be clicked to be enlarged, and movies can be added to Playlist and link to the movie's detail page.
+ Additional data hyperlinking includes
    + Similar Movies from Movie Details page
    + Movie cast from Movie Details page
    + Person credits from Person Details page
    + External homepages appended to the movie overview or person bio, with logic to only show hyperlink if a homepage exists.
+ Enhanced filtering and sorting:
    + Added filtering by year and sorting by either title or user rating to movies.
    + Added filtering by name and sorting by either name or popularity to people.
+ Created a My Made Up Movie page that opens a form in a drawer, saves and redraws the underlying page with a list of the movies you've created. Movies you've created can also be deleted.
+ Updated Storybook stories.
+ Revised the Site Header to group logical categories together under drop-downs (the horizontal list of menu items was getting rather long).

## Feature Design.

#### Upcoming Movies

> Lists movies from the Upcoming movies endpoint of TMDB, paginating to 100 pages

> Movies can be tagged and untagged via the same icon button, with the button changing color and icon depending on its state.

![][Movies_Upcoming]

#### Popular Movies

> Similar to Upcoming, but using a different endpoint.

![][Movies_Popular]

#### Trending Movies

> Similar to Upcoming, but using a different endpoint.

![][Movies_Trending]

#### Movie Sorting

> Movies can be sorted and filtered by a few different criteria.  The filters are cumulative.  The sort sorts whatever is in view.

> Sorting by vote_average.

![][Movies_sorting_1]

> Sorting by alphabetically.

![][Movies_sorting_2]

> Filtering by release year.

![][Movies_filtering_1]

#### My Playlist

> We began to stub out the tagging of movies during class exercises, but didn't actually create a playlist page.  Here is the playlist page.  Two of the three are also favorited.

![][Movies_My_playlist]

> Note that in addition to changing color, the icon changes from a + to a x for adding or removing the tag.

#### Enhanced Movie Details

> Re-laid out the information and added some data points.

> Enabled the user to tag the movie as favourite or playlist here in the same manner as on the cards.  

> Included a conditionally displayed home page link that opens a new browser tab, appended to the overview if the endpoint returns a homepage.

![][Movie_details]

#### Similar Movies and Movie Cast

> Added parameterized components that display similar movies and the movie's cast as a horizontal strip of small cards.

![][Movie_details_Cast]

#### Made Up Movie Form and Page

> Used the drawer pattern we established for sorting and view reviews to contain the webform for creating a made up movie.  

![][Made_up_movie_form]

> I opted for a different design for displaying the save made up movie back to the user.  The made up movies can be deleted.

![][Made_up_movie_page]

#### Empty state pages

> For pages that are user populated and potentially could be empty, I felt we needed an empty state with some useful call to action for the user.  I created empty states for Favourite People and Movies, My Playlist and My Made Up Movies with some relevant instruction and action for each.  

![][Empty_state_Playlist]

![][Empty_state_Madeup_movies]

![][Empty_state_Favorite_movies]

#### People List

> There is no discover/person endpoint so I chose to use trending/person to populate my page.

> Lists 20 people at a time, paginating to 100 pages.

![][People_Pagination]

#### People List Sorting & Filtering

> People can be filtered by name or sorted alphabetically or by popularity.

![][People_Filtering]

> Similar to movies, people can be favorited in any view and there is a favourites page.

![][People_Favourite]

#### Person Details

> A person details page was added. A person can be tagged as a favorite on the details page.

> If the endpoint returns a homepage for the person, it is appended as a link to the end of the Overview, opening the page in a new browser tab.

![][Person_Details]

#### Person Credits

> Added a parameterized component that displays the person's movie credits as a horizontal strip of small cards.

![][Person_details_Credits]

#### TV Show List

> Lists 20 people at a time, paginating to 100 pages from the discover/tv endpoint.

> Can be filterd by name or sorted alphabetically or by user rating (vote_average).

![][TVShows_Discover]

#### TV Show Details

> A TV show details page was added.

> If the endpoint returns a homepage for the TV show, it is appended as a link to the end of the Overview, opening the page in a new browser tab.

![][TVShow_Details]

## Storybook.

#### Revised site header
![][Storybook_Revised_Site_Header]

#### Enhanced movie filters
![][Storybook_Revised_movie_filters]

#### Enhanced movie details
![][Storybook_Revised_movie_details]

#### Small movie card for horizontal strip
![][Storybook_Small_movie_card]

#### Similar movies horizontal strip
![][Storybook_Similar_movies_strip]

#### Made-up movies form
![][Storybook_Madeup_movies_form]

#### Person filter & filter UI with filtering and sorting
![][Storybook_Person_filter_UI]

#### People list & person card
![][Storybook_People_list_and_card]

#### Person details (note no home page URL for this SampleData one)
![][Storybook_Person_details]

#### Revised loading
![][Storybook_loading]

## Authentication (Routing, Parameterization).

+ /movies - List of 20  movies from the Discover/Movies endpoint, paginating to 100 pages
+ /movies/upcoming - List of 20 movies from the Movies/Upcoming endpoint, paginating to 100 pages
+ /movies/popular - List of 20 movies from the Movies/Popular endpoint, paginating to 100 pages
+ /movies/trending - List of 20 movies from the Trending/Movies endpoint, paginating to 100 pages
+ /movies/favourites - Array of movies tagged as favorites
+ /movies/myplaylist - Array of movies tagged as my playlist
+ /movies/mymadeupmovies - Array of user created data via a webform
+ /movies/{movie_id} - Detailed information on a specific movie
+ /reviews/{review_id} - The full text of a movie review

+ /people/popular - List of 20 movies from the Person/Popular endpoint, paginating to 100 pages
+ /people/trending - List of 20 movies from the Trending/Person endpoint, paginating to 100 pages
+ /people/favourites - Array of people tagged as favorites
+ /people/{person_id} - Detailed information on a specific person

+ /tv/shows - List of 20  movies from the Discover/TV endpoint, paginating to 100 pages
+ /tv/{tv_id} - Detailed information on a specific TV show

## Deployment.

Vercel: https://lab-movies-app-omega.vercel.app/

I don't believe it requires credentials.

## Additional Information.

+ I separated the site header into two versions of the lists, keeping mobile as a flat list since it collapses under a hamburger menu, while desktop has a series of drop-down menus.
+ In addition to the routes listed above, I created some parameterized components that I nest in a page:
    + I nested a movies/similar view within the movie details page.  This seemed to make more sense to me from a user experience perspective - seeing the list of similar movies within the same context as the movie they are associated with rather than going to a new page.
    + I nested a movies/cast page within the movie details page.
    + I nested a person/credits page within the person details page.
+ I included empty state pages for Favorite Movies and People, My Playlist and My Made Up Movies, along with relevant call-to-actions for the user.
+ I added a date formatting function to utils to make release years and first air dates and birth dates formatted nicely, displaying Apr 14, 2023 instead of 2023-14-04.

[Storybook_Small_movie_card]: ./images/Storybook_Small_movie_card.png
[Storybook_Similar_movies_strip]: ./images/Storybook_Similar_movies_strip.png
[Storybook_Revised_Site_Header]: ./images/Storybook_Revised_Site_Header.png
[Storybook_Revised_movie_filters]: ./images/Storybook_Revised_movie_filters.png
[Storybook_Revised_movie_details]: ./images/Storybook_Revised_movie_details.png
[Storybook_Person_filter]: ./images/Storybook_Person_filter.png
[Storybook_Person_filter_UI]: ./images/Storybook_Person_filter_UI.png
[Storybook_Person_details]: ./images/Storybook_Person_details.png
[Storybook_People_list_and_card]: ./images/Storybook_People_list_and_card.png
[Storybook_Madeup_movies_form]: ./images/Storybook_Madeup_movies_form.png
[Storybook_loading]: ./images/Storybook_loading.png

[People_Trending]: ./images/People_Trending_with_some_tagged.png
[People_Pagination]: ./images/People_Pagination.png
[People_Filtering]: ./images/People_Filtering.png
[People_Favourite]: ./images/People_Favourite.png
[Person_Details]: ./images/Person_Details.png
[Person_details_Credits]: ./images/Person_details_Credits.png

[Movies_Upcoming]: ./images/Movies_Upcoming.png
[Movies_Trending]: ./images/Movies_Trending_with_some_tagged.png
[Movies_sorting_1]: ./images/Movies_sorting_by_average_vote.png
[Movies_sorting_2]: ./images/Movies_sorting_alphabetically.png
[Movies_Popular]: ./images/Movies_Popular.png
[Movies_My_playlist]: ./images/Movies_My_playlist.png
[Movies_filtering_1]: ./images/Movies_filtering_by_year.png
[Movie_details]: ./images/Movie_details_tagged.png
[Movie_details_Cast]: ./images/Movie_details_Cast.png
[Made_up_movie_page]: ./images/Made_up_movie_page.png
[Made_up_movie_form]: ./images/Made_up_movie_form.png
[Empty_state_Playlist]: ./images/Empty_state_Playlist.png
[Empty_state_Madeup_movies]: ./images/Empty_state_Madeup_movies.png
[Empty_state_Favorite_movies]: ./images/Empty_state_Favorite_movies.png

[TVShow_Details]: ./images/TVShow_Details.png
[TVShows_Discover]: ./images/TVShows_Discover.png